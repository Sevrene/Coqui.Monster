import buttonSettings from "../button/buttonSettings";

const menuSettings = {
  name: 'settings',
  title: 'Settings',
  type: 'object',
  group: 'settings',
  options: {
    collapsible: true,
  },
  description: 'Settings are applied to the menu as a whole. They may be overridden by individual items',
  fields: [
    {
      name: 'spacing',
      title: 'Spacing',
      type: 'number',
      options: {
        list: [
          { value: 1, title: 'Small' },
          { value: 2, title: 'Medium' },
          { value: 3, title: 'Large' },
          { value: 0, title: 'None' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      description: 'Space between menu buttons',
    },
    {
      name: 'buttonSettings',
      title: 'Button Settings',
      type: 'object',
      options: {
        collapsible: true,
        columns: 2,
      },
      description: 'Settings applied to all menu buttons',
      fields: buttonSettings.fields.filter(field => field.name !== 'disable'),
    },
  ],
  initialValue: {
    spacing: 2,
    buttonSettings: buttonSettings.initialValue,
  },
};

export default menuSettings;
