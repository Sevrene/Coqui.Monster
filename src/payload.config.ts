import {
  FixedToolbarFeature,
  LinkFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

import { postgresAdapter } from '@payloadcms/db-postgres';
import { redirectsPlugin } from '@payloadcms/plugin-redirects';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { Colors } from './cms/collections/Colors';
import Gradients from './cms/collections/Gradients';
import { Media } from './cms/collections/Media';
import { Socials } from './cms/collections/Socials';
import { Users } from './cms/collections/Users';
import Footer from './cms/globals/Footer';
import Header from './cms/globals/Header';
import Homepage from './cms/globals/Homepage';
import SiteSettings from './cms/globals/SiteSettings';
import Theme from './cms/globals/Theme';
import redirectsPluginConfig from './cms/plugins/redirectsPluginConfig';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const excludedRichTextFeatures = ['relationship', 'upload', 'inlineCode'];

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: `http://localhost:3000/next/preview?preview=true&previewSecret=${process.env.PREVIEW_SECRET}`,
      // Versions are currently broken on globals in Payload. Add them back when fixed.
      // https://github.com/payloadcms/payload/issues/11879
      // globals: ['header', 'homepage', 'footer', 'site-settings', 'theme'],
      collections: ['colors', 'gradients', 'media', 'socials'],
    },
    components: {
      beforeDashboard: ['@/cms/components/dashboard/dashboardHeader.tsx'],
      afterDashboard: [
        '@/cms/components/dashboard/dashboardHookButtons.tsx',
        '@/cms/components/dashboard/dashboardReadMe.tsx',
      ],
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
  }),
  sharp,
  plugins: [redirectsPlugin(redirectsPluginConfig)],
});
