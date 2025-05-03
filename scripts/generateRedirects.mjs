import { fileURLToPath } from 'url';
import fs from 'fs';
import { getCacheRedirects } from '@/cms/utils/getRedirects';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputJsonPath = path.resolve(__dirname, '../redirects/redirects.json');

const generateRedirects = async () => {
  console.log('🚀 Generating redirects...');
  const redirects = await getCacheRedirects();

  const formattedRedirects = redirects
    .map(({ name, from, to, type, hidden }) => ({
      name,
      from,
      to,
      type,
      hidden,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  fs.writeFileSync(outputJsonPath, JSON.stringify(formattedRedirects, null, 2));

  console.log(`✅ Generated ${formattedRedirects.length} redirects`);
  process.exit(0);
};

await generateRedirects();
