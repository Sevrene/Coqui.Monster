const linkSchema = {
  name: 'linkSchema',
  title: 'Link',
  type: 'object',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
  ],
};

export default linkSchema;
