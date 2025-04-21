import type { GlobalConfig } from 'payload';

const Theme: GlobalConfig = {
  slug: 'theme',
  fields: [
    {
      name: 'colors',
      type: 'group',
      fields: [
        {
          name: 'primary',
          type: 'relationship',
          relationTo: 'colors',
          required: true,
        },
        {
          name: 'secondary',
          type: 'relationship',
          relationTo: 'colors',
          required: true,
        },
        {
          name: 'links',
          type: 'relationship',
          relationTo: 'colors',
          required: true,
        },
        {
          name: 'darkModeEnabled',
          type: 'checkbox',
          label: 'Add Dark Mode',
        },
        {
          name: 'darkMode',
          admin: {
            condition: (_, siblingData) => siblingData.darkModeEnabled,
          },
          type: 'group',
          fields: [
            {
              name: 'primary',
              type: 'relationship',
              relationTo: 'colors',
              required: true,
            },
            {
              name: 'secondary',
              type: 'relationship',
              relationTo: 'colors',
              required: true,
            },
            {
              name: 'links',
              type: 'relationship',
              relationTo: 'colors',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default Theme;
