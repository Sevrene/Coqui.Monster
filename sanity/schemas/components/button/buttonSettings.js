const buttonSettings = {
  name: 'settings',
  title: 'Settings',
  type: 'object',
  group: 'settings',
  options: {
    collapsible: true,
    columns: 2,
  },
  fields: [
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: ['text', 'outlined', 'contained'],
        layout: 'radio',
        direction: 'horizontal'
      },
      description: 'Button style variant',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: ['small', 'medium', 'large'],
        layout: 'radio',
        direction: 'horizontal',
      },
      description: 'Button size',
    },
    {
      name: 'disable',
      title: 'Disable',
      type: 'boolean',
      description: 'Disable the button',
    },
  ],
  initialValue: {
    variant: 'text',
    size: 'medium',
    disable: false,
  },
};

export default buttonSettings;

// TODO: The actual "Button" and "MenuItem" 
// are two different components and may have different settings.
