import { MdSettings } from 'react-icons/md';
import basicTitle from '../abstracts/core/basicTitle';
import buttonStyles from '../abstracts/styles/buttonStyles';
import { genericGroups } from '../abstracts/core/genericGroups';
import menuSettings from '../abstracts/settings/menuSettings';

const menu = {
  name: 'menuGroup',
  title: 'MenuGroup',
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
      name: 'items',
      title: 'Menu Buttons',
      type: 'array',
      group: 'content',
      fieldset: 'content',
      of: [{ type: 'menuButton' }, { type: 'menu'}],
      description: 'List of menu buttons',
    },
    menuSettings,
    {
      name: 'styles',
      title: 'Styles',
      type: 'object',
      group: 'styles',
      options: {
        collapsible: true,
      },
      fields: buttonStyles.fields,
      initialValue: buttonStyles.initialValue,
    },
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
