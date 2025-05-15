import { getRedirects } from '@/cms/utils/getRedirects';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputJsonPath = path.resolve(__dirname, '../redirects/redirects.json');

const generateRedirects = async () => {
  console.log('🚀 Generating redirects...');
  const redirects = await getRedirects();

  const formattedRedirects = redirects.map(
    ({ name, from, to, type, hidden }) => ({
      name,
      from,
      to,
      type,
      hidden,
    })
  );

  fs.writeFileSync(outputJsonPath, JSON.stringify(formattedRedirects, null, 2));

  console.log(`✅ Generated ${formattedRedirects.length} redirects`);
  process.exit(0);
};

await generateRedirects();
