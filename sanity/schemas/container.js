/* eslint-disable import/no-anonymous-default-export */

export default {
  name: 'container',
  title: 'Container',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' }
      ],
    },
    {
      name: 'padding',
      title: 'Padding',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
    },
    {
      name: 'margin',
      title: 'Margin',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
    },
    {
      name: 'display',
      title: 'Display',
      type: 'string',
      options: {
        list: [
          { title: 'Block', value: 'block' },
          { title: 'Inline', value: 'inline' },
          { title: 'Flex', value: 'flex' },
          // Add more display options here
        ],
      },
    },
    {
      name: 'flexDirection',
      title: 'Flex Direction',
      type: 'string',
      options: {
        list: [
          { title: 'Row', value: 'row' },
          { title: 'Column', value: 'column' },
          // Add more flex direction options here
        ],
      },
    },
    // Add more setting options here
  ],
};
