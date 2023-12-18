import { apiVersion, dataset, projectId } from './env';

import { createClient } from '@sanity/client';

export async function sanityFetch(type) {
  const client = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
    useCdn: false,
  });

  try {
    return client.fetch(`*[ _type == "${type}"]`);
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error;
  }
}
