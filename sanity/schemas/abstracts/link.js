const linkSchema = {
  name: 'linkSchema',
  title: 'Link',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default linkSchema;
