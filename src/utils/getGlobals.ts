import { GlobalSlug, getPayload } from 'payload';

import configPromise from '@payload-config';
import fs from 'fs';
import { draftMode } from 'next/headers';
import path from 'path';
import type { Config } from 'src/payload-types';
import { fileURLToPath } from 'url';

type Global = keyof Config['globals'];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(path.dirname(__filename), '..');

async function checkPreview(): Promise<boolean> {
  return (await draftMode()).isEnabled;
}

export async function getGlobal(slug: Global, depth = 0, selectClause = {}) {
  const isPreview = await checkPreview();
  const cacheFile = path.join(__dirname, 'cache', `${slug}Data.json`);
  const lockFile = `${cacheFile}.lock`;
  let data: any = {};

  if (process.env.NODE_ENV === 'development') {
    return await getCMSData(slug, depth, isPreview, cacheFile, selectClause);
  }

  if (!isPreview && fs.existsSync(cacheFile)) {
    //console.log('Cache file exists, returning cached data:', cacheFile);
    return (data = await getCachedData(cacheFile));
  }

  // Check for active lock file and wait for cache to appear
  if (fs.existsSync(lockFile)) {
    while (!fs.existsSync(cacheFile)) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    return await getCachedData(cacheFile);
  }

  // No active lock; proceed to fetch header data
  try {
    //console.log('No active lock, proceeding to fetch data for:', slug);
    fs.writeFileSync(lockFile, 'fetching');
    const data = await getCMSData(
      slug,
      depth,
      isPreview,
      cacheFile,
      selectClause
    );

    return data;
  } finally {
    // Clean up lock
    if (fs.existsSync(lockFile)) {
      fs.unlinkSync(lockFile);
    }
  }
}

export const getCachedData = async (cacheFile: string) => {
  if (fs.existsSync(cacheFile)) {
    try {
      const cachedData = fs.readFileSync(cacheFile, 'utf-8');
      const parsedData = JSON.parse(cachedData);

      return parsedData;
    } catch (error) {
      console.error('Error reading cached data:', error);
    }
  }

  return null;
};

// TODO: Look into using unstable_cache for this
export const getCMSData = async (
  slug: GlobalSlug,
  depth: number,
  isPreview: boolean,
  cacheFile: string,
  selectClause: any = {}
) => {
  const payload = await getPayload({ config: configPromise });

  const globalData = await payload.findGlobal({
    slug,
    depth,
    ...(isPreview && { draft: true }),
    ...(selectClause &&
      Object.keys(selectClause).length > 0 && { select: selectClause }),
  });

  if (!globalData) {
    throw new Error(`Failed to fetch global data for: ${slug}`);
  }

  try {
    fs.writeFileSync(cacheFile, JSON.stringify(globalData, null, 2), 'utf-8');
    //console.log(`${slug} data written to file successfully`);
  } catch (error) {
    console.error('Error writing data to file:', error);
  }

  return globalData;
};
