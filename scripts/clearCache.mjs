import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the absolute path for the src/cache directory
const cacheDir = path.resolve(__dirname, '../src/cache');

function clearCache() {
  try {
    // Delete the entire cache directory
    fs.rmSync(cacheDir, { recursive: true });
  } catch (error) {
    console.error(`Failed to delete cache directory ${cacheDir}:`, error);
    process.exit(1);
  }

  try {
    // Recreate the cache directory
    fs.mkdirSync(cacheDir);
  } catch (error) {
    console.error(`Failed to create cache directory ${cacheDir}:`, error);
    process.exit(1);
  }

  console.log('Cache cleared.');
}

clearCache();
