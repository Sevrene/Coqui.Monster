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

  // Map to Next.js redirect format
  const formattedRedirects = redirects.map(({ from, to, type }) => ({
    source: from,
    destination: to.type === 'custom' ? to.url : to.reference,
    permanent: type === '301' ? true : false,
  }));

  fs.writeFileSync(outputJsonPath, JSON.stringify(formattedRedirects, null, 2));

  console.log(`✅ Generated ${formattedRedirects.length} redirects`);
  process.exit(0);
};

await generateRedirects();
