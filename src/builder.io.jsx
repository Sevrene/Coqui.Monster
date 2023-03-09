import { builder, Builder } from '@builder.io/react';
import ReactList from './components/Builder.io Components/reactList';
import TwitchData from './components/Builder.io Components/twitchData';
import BasicTabs from './components/Builder.io Components/basicTabs';

builder.init(process.env.BUILDER_IO_ACCESS_TOKEN);

Builder.registerComponent(ReactList, {
  name: 'React List',
  inputs: [{
    name: 'items',
    type: 'list',
    defaultValue: [{
      text: 'Item 1',
      MaterialIcon: false,
      icon: 'iconName',
      iconName: 'Home',
      link: 'https://www.google.com'
    }],
    subFields: [
      { name: 'text', type: 'text', required: true },
      { name: 'MaterialIcon', type: 'boolean'},
      { name: 'icon', type: 'file', showIf: `!options.get('MaterialIcon')` },
      { name: 'iconName', type: 'text', showIf: `options.get('MaterialIcon')` },
      { name: 'link', type: 'url', required: true },
    ],
  },],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
});

Builder.registerComponent(TwitchData, {
  name: 'Twitch Data',
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png'
});

Builder.registerComponent(BasicTabs, {
  name: 'BasicTabs',
  inputs: [
    {
      name: 'defaultTabIndex',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
    {
      name: 'centered',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'tabs',
      type: 'list',
      subFields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'New tab',
        },
        {
          name: 'content',
          type: 'uiBlocks',
          defaultValue: [],
        },
      ],
      defaultValue: [
        {
          label: 'Tab 1',
          content: [],
        },
      ],
    },
  ],
});