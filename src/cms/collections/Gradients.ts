import type { CollectionConfig } from 'payload';

// This collection is used to store gradients for use throughout the site
const Gradients: CollectionConfig = {
  slug: 'gradients',
  versions: {
    drafts: true,
    maxPerDoc: 5,
  },
  admin: {
    useAsTitle: 'name',
    group: 'System',
    hideAPIURL: process.env.NODE_ENV === 'production',
    defaultColumns: ['name', 'colors', 'angle', 'updatedAt', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'angle',
      type: 'number',
      label: 'Gradient Angle (in degrees)',
      defaultValue: 0,
      min: 0,
      max: 360,
      admin: {
        components: {
          Cell: '@/cms/components/cells/angleCell.tsx',
        },
      },
    },
    {
      name: 'colors',
      type: 'array',
      label: 'Colors',
      required: true,
      minRows: 2,
      admin: {
        position: 'sidebar',
        components: {
          Cell: '@/cms/components/cells/gradientCell.tsx',
        },
      },
      fields: [
        {
          name: 'color',
          type: 'relationship',
          relationTo: 'colors',
          required: true,
        },
        {
          name: 'position',
          type: 'number',
          label: 'Position (in %)',
          required: true,
        },
        {
          name: 'transparency',
          type: 'number',
          label: 'Transparency',
          min: 0,
          max: 100,
          admin: {
            description:
              'Transparency value (0-100). Defaults to 100 (fully opaque).',
          },
        },
      ],
    },
  ],
};

export default Gradients;
