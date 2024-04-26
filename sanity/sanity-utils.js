import { apiVersion, dataset, projectId, useCdn } from './env';

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
});

export async function sanityFetchType(type) {
  try {
    return client.fetch(`*[ _type == "${type}"]`);
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error;
  }
}

// TODO: Make cache revalidate after a certain amount of time

export async function sanityFetchQuery(query) {
  try {
    return client.fetch(`${query}`, { cache: 'no-store' });
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    throw error;
  }
}
