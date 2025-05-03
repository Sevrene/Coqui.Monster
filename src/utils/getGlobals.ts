import { GlobalSlug, getPayload } from 'payload';

import type { Config } from 'src/payload-types';
import configPromise from '@payload-config';
import { draftMode } from 'next/headers';
import { unstable_cache } from 'next/cache';

type Global = keyof Config['globals'];

async function checkPreview(): Promise<boolean> {
  return (await draftMode()).isEnabled;
}

export async function getGlobal(slug: Global, depth = 0, selectClause = {}) {
  const isPreview = await checkPreview();

  // TODO: Revist how the entire preview stuff is handled
  if (process.env.NODE_ENV === 'development' || isPreview) {
    return getCMSData(slug, depth, isPreview, selectClause);
  }

  return unstable_cache(
    async () => getCMSData(slug, depth, isPreview, selectClause),
    [slug, depth.toString()],
    {
      tags: [`global-${slug}`],
    }
  )();
}

export const getCMSData = async (
  slug: GlobalSlug,
  depth: number,
  isPreview: boolean,
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

  return globalData;
};
