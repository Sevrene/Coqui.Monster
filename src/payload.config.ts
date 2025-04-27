import { postgresAdapter } from '@payloadcms/db-postgres';
import { redirectsPlugin } from '@payloadcms/plugin-redirects';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
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
import Theme from './cms/globals/Theme';
import redirectsPluginConfig from './cms/plugins/redirectsPluginConfig';

// storage-adapter-import-placeholder

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

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
      // globals: ['header', 'footer', 'theme'],
      collections: ['colors', 'gradients', 'media', 'socials'],
    },
  },
  globals: [Header, Footer, Theme],
  collections: [Users, Media, Socials, Colors, Gradients],
  editor: lexicalEditor(),
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
  plugins: [
    // TODO: Probably want to extract this to a separate file
    redirectsPlugin(redirectsPluginConfig),
    // storage-adapter-placeholder
  ],
});
