/* eslint-disable import/no-anonymous-default-export */

export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'menu',
      type: 'reference',
      title: 'Menu',
      to: [{ type: 'menu' }],
    },
    {
      name: 'settings',
      title: 'Settings',
      type: 'object',
      fields: [
        {
          name: 'colorScheme',
          title: 'Color Scheme',
          type: 'reference',
          to: { type: 'theme' },
        },
        {
          name: 'hideStylingUntilScrolled',
          title: 'Hide Styling Until Scrolled',
          type: 'boolean',
        },
        {
          name: 'sticky',
          title: 'Sticky',
          type: 'boolean',
        },
        {
          name: 'elevation',
          title: 'Elevation',
          type: 'string',
          options: {
            list: ['none', 'low', 'medium', 'high'],
            layout: 'radio',
            direction: 'horizontal',
          },
        },
      ],
      initialValue: {
        hideStylingUntilScrolled: false,
        sticky: false,
        elevation: 'none',
      },
    },
  ],
};
