import configPromise from '@payload-config';
import { draftMode } from 'next/headers';
import { getPayload } from 'payload';
import type { Config } from 'src/payload-types';

type Global = keyof Config['globals'];

async function checkPreview(): Promise<boolean> {
  return (await draftMode()).isEnabled;
}

export async function getGlobal(slug: Global, depth = 0) {
  const isPreview = await checkPreview();
  const payload = await getPayload({ config: configPromise });

  const global = await payload.findGlobal({
    slug,
    depth,
    ...(isPreview && { draft: true }),
  });

  return global;
}
