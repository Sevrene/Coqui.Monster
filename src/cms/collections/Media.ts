import type { CollectionConfig } from 'payload';

// This collection is used to store media files for use throughout the site
export const Media: CollectionConfig = {
  slug: 'media',
  versions: {
    drafts: true,
    maxPerDoc: 5,
  },
  admin: {
    useAsTitle: 'alt',
    group: 'System',
    hideAPIURL: process.env.NODE_ENV === 'production',
    defaultColumns: ['alt', 'filename', 'updatedAt', 'createdAt'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
      admin: {
        description: 'Simple text description of the image.',
      },
    },
  ],
  upload: true,
};
