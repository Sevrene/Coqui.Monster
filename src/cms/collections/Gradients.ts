import type { CollectionConfig } from 'payload';

const Gradients: CollectionConfig = {
  slug: 'gradients',
  admin: {
    useAsTitle: 'name',
    description:
      'Example: gradient(0deg, #6600CC 0%, #000000 100%) transitions from purple to black starting from the bottom',
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
    },
    {
      name: 'colors',
      type: 'array',
      label: 'Colors',
      minRows: 2,
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
