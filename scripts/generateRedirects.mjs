import { fileURLToPath } from 'url';
import fs from 'fs';
import { getRedirects } from '@/cms/utils/getRedirects';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputJsonPath = path.resolve(__dirname, '../redirects/redirects.json');

const generateRedirects = async () => {
  console.log('🚀 Generating redirects...');
  const redirects = await getRedirects();

  const formattedRedirects = redirects
    .map(({ name, from, to, type, hidden }) => ({
      name,
      from,
      to,
      type,
      hidden,
    }))
    .sort((a, b) => {
      const nameCompare = a.name.localeCompare(b.name);
      if (nameCompare !== 0) return nameCompare;
      return a.from.localeCompare(b.from);
    });

  fs.writeFileSync(outputJsonPath, JSON.stringify(formattedRedirects, null, 2));

  console.log(`✅ Generated ${formattedRedirects.length} redirects`);
  process.exit(0);
};

await generateRedirects();
