const menu = {
  title: 'Menu',
  name: 'menu',
  type: 'object',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'string',
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'string',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      description: 'URL to navigate when the button is clicked',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Menu',
      name: 'menu',
      type: 'array',
      of: [{ type: 'menu' }],
      description: 'List of menu buttons',
    },
  ],
};

export default menu;
