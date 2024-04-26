import { MdSettings } from 'react-icons/md';
import basicTitle from '../../abstracts/core/basicTitle';
import { genericGroups } from '../../abstracts/core/genericGroups';
import menuSettings from './menuSettings';

const menu = {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: MdSettings,
  groups: genericGroups,
  fieldsets: [
    {
      name: 'content',
      title: 'Content',
      options: {
        collapsible: true,
      },
    },
    {
      name: 'styles',
      title: 'Styles',
      options: {
        collapsible: true,
      },
    },
  ],
  fields: [
    basicTitle,
    {
      name: 'navigationItems',
      title: 'Navigation Menu Items',
      type: 'array',
      group: 'content',
      fieldset: 'content',
      of: [{ type: 'button', canOverride: true }],
      description: 'List of navigation menu items',
    },
    menuSettings,
  ],
};

// TODO: Finish setting up styles

export default menu;

// TODO: All items inside the menu are either a menuButton or another menu.
// But the actual settings should be related to MUI MenuItems, not regular buttons.
// Should I just create a new object, one that is "Top Level" and one that is not?
// Makes it easier to just make items childMenuButton and childMenu.

// Are the settings actually all that different? Need to investigate HOW different.

// Every menu should be made up of menuItems or other menus.
// Top level menus should just be a list of menus, not their own menu
