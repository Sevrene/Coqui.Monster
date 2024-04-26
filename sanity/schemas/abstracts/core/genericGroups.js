import { MdDocumentScanner } from 'react-icons/md';
import { MdFormatColorFill } from 'react-icons/md';
import { MdSettings } from 'react-icons/md';

const genericGroups = [
  {
    name: 'content',
    title: 'Content',
    icon: MdDocumentScanner,
    default: true,
  },
  {
    name: 'settings',
    title: 'Settings',
    icon: MdSettings,
  },
  {
    name: 'styles',
    title: 'Styles',
    icon: MdFormatColorFill,
  },
];

const genericGroupsWildcard = ['content', 'styles', 'settings'];

export { genericGroups, genericGroupsWildcard };
