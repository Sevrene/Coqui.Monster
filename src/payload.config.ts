import {
  FixedToolbarFeature,
  LinkFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

import { Colors } from '@/cms/collections/Colors';
import Gradients from '@/cms/collections/Gradients';
import { Media } from '@/cms/collections/Media';
import { Socials } from '@/cms/collections/Socials';
import { Users } from '@/cms/collections/Users';
import Footer from '@/cms/globals/Footer';
import Header from '@/cms/globals/Header';
import Homepage from '@/cms/globals/Homepage';
import SiteSettings from '@/cms/globals/SiteSettings';
import Theme from '@/cms/globals/Theme';
import redirectsPluginConfig from '@/cms/plugins/redirectsPluginConfig';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { redirectsPlugin } from '@payloadcms/plugin-redirects';
import { s3Storage } from '@payloadcms/storage-s3';
import { revalidateTag } from 'next/cache';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { keepAlive } from './cms/utils/keepAliveSchema';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const excludedRichTextFeatures = ['relationship', 'upload', 'inlineCode'];

export default buildConfig({
  admin: {
    user: Users.slug,
    avatar: { Component: '@/cms/components/overrides/adminAvatar.tsx' },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    /* Disabled for now until possibly working
    livePreview: {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/next/preview?preview=true&previewSecret=${process.env.PREVIEW_SECRET}`,
      // Versions are currently broken on globals in Payload. Add them back when fixed.
      // https://github.com/payloadcms/payload/issues/11879
      // globals: ['header', 'homepage', 'footer', 'site-settings', 'theme'],
      collections: ['colors', 'gradients', 'media', 'socials'],
    },
    */
    components: {
      beforeDashboard: ['@/cms/components/dashboard/dashboardHeader.tsx'],
      afterDashboard: ['@/cms/components/dashboard/dashboardOverviewPanel.tsx'],
      beforeNavLinks: ['@/cms/components/dashboard/returnHomeNav.tsx'],
    },
  },
  globals: [Header, Homepage, Footer, SiteSettings, Theme],
  collections: [Users, Colors, Gradients, Media, Socials],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures.filter(
        (feature) => !excludedRichTextFeatures.includes(feature.key)
      ),
      FixedToolbarFeature(),
      LinkFeature({
        enabledCollections: ['redirects'],
        fields: ({ defaultFields }) => [...defaultFields],
      }),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    beforeSchemaInit: [
      ({ schema }) => {
        return {
          ...schema,
          tables: {
            ...schema.tables,
            keepAlive,
          },
        };
      },
    ],
    afterSchemaInit: [
      ({ schema }) => {
        // Enable RLS for all tables
        Object.values(schema.tables).forEach((table) => table.enableRLS());
        return schema;
      },
    ],
  }),
  sharp,
  plugins: [
    redirectsPlugin(redirectsPluginConfig),
    ...(process.env.NODE_ENV === 'development'
      ? []
      : [
          s3Storage({
            collections: {
              media: {
                prefix: 'media',
                generateFileURL: ({ filename, prefix }) => {
                  const base = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${process.env.S3_BUCKET}`;
                  const path = prefix ? `${prefix}/${filename}` : filename;
                  return `${base}/${path}`;
                },
              },
            },
            bucket: process.env.S3_BUCKET,
            config: {
              forcePathStyle: true,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
              },
              region: process.env.S3_REGION,
              endpoint: process.env.S3_ENDPOINT,
            },
          }),
        ]),
  ],
  endpoints: [
    {
      path: '/revalidate',
      method: 'post',
      handler: async (req) => {
        if (!req.user || !req.user.roles.includes('admin')) {
          return Response.json({ error: 'forbidden' }, { status: 403 });
        }

        // Revalidates the homepage
        // TODO: This should be revisted in the future to allow for more granular revalidation
        revalidateTag('global-homepage');
        revalidateTag('global-header');
        revalidateTag('global-footer');
        revalidateTag('global-site-settings');
        revalidateTag('global-theme');
        // Redirects are not revalidated here as they rely on a rebuild hook

        return Response.json({
          revalidated: true,
          now: Date.now(),
        });
      },
    },
    {
      path: '/rebuild',
      method: 'post',
      handler: async (req) => {
        if (!req.user || !req.user.roles.includes('admin')) {
          return Response.json({ error: 'forbidden' }, { status: 403 });
        }

        const response = await fetch(
          `https://api.netlify.com/build_hooks/${[process.env.NETLIFY_REBUILD_HOOK]}`,
          { method: 'POST' }
        );

        return Response.json({
          rebuilt: response.ok,
          now: Date.now(),
        });
      },
    },
  ],
});
