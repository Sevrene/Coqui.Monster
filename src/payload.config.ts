import { postgresAdapter } from '@payloadcms/db-postgres';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { Colors } from './cms/collections/Colors';
import Gradients from './cms/collections/Gradients';
import { Media } from './cms/collections/Media';
import Redirects from './cms/collections/Redirects';
import { Socials } from './cms/collections/Socials';
import { Users } from './cms/collections/Users';
import Footer from './cms/globals/Footer';
import Header from './cms/globals/Header';
import Theme from './cms/globals/Theme';

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
      globals: ['header', 'footer', 'theme'],
      collections: [
        'users',
        'media',
        'redirects',
        'socials',
        'colors',
        'gradients',
      ],
    },
  },
  globals: [Header, Footer, Theme],
  collections: [Users, Media, Redirects, Socials, Colors, Gradients],
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
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
