import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonPath = path.resolve(__dirname, 'redirects.json');

const redirects = async () => {
  const data = await fs.readFile(jsonPath, 'utf-8');
  const cmsRedirects = JSON.parse(data);
  const redirects = cmsRedirects;
  // Add static redirects here

  return redirects;
};

export default redirects;
