/* eslint-disable import/no-anonymous-default-export */

export default {
  name: 'navbar',
  type: 'object',
  fields: [
    {
      name: 'menuItems',
      type: 'array',
      title: 'Menu Items',
      of: [
        {
          name: 'link',
          type: 'menu',
          title: 'Link',
        },
      ],
    },
  ],
};
