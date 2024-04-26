const background = {
  name: 'background',
  title: 'Background',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Background Type',
      type: 'string',
      options: {
        list: ['solid', 'gradient', 'transparent', 'image'],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'colorSolid',
      title: 'Background Color',
      type: 'color',
      validation: (Rule) =>
        Rule.custom((value, { parent: { type } }) => {
          return value || type !== 'solid' ? true : 'Required';
        }),
      hidden: ({ parent }) => parent?.type !== 'solid',
    },
    {
      name: 'colorGradient',
      title: 'Background Gradient',
      type: 'object',
      validation: (Rule) =>
        Rule.custom((value, { parent: { type } }) => {
          return value || type !== 'gradient' ? true : 'Required';
        }),
      hidden: ({ parent }) => parent?.type !== 'gradient',
      fields: [
        {
          name: 'direction',
          title: 'Direction',
          type: 'number',
          description: 'The angle of the gradient in degrees',
        },
        {
          name: 'colors',
          title: 'Colors',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'color',
                  title: 'Color',
                  type: 'color',
                },
                {
                  name: 'colorStop',
                  title: 'Color Stop',
                  type: 'number',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default background;
