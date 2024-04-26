import basicTitle from '../../abstracts/core/basicTitle';
import buttonSettings from './buttonSettings';
import { genericGroups } from '../../abstracts/core/genericGroups';

// TODO: Bring link into is own object to allow for more complex links and reuse
// Make an object that is hidden based on menu, with fields for the reusable parts of the link
const content = {
  name: 'content',
  title: 'Content',
  type: 'object',
  group: 'content',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'URL to navigate when the button is clicked',
      validation: (Rule) =>
        Rule.custom((value, { parent: { menu } }) => {
          return value || menu?.length > 0
            ? true
            : 'Link required if no sub-menu';
        }),
      hidden: ({ parent }) => parent?.menu?.length > 0,
    },
    {
      name: 'newTab',
      title: 'Open in New Tab',
      type: 'boolean',
      description: 'Open the link in a new tab',
      hidden: ({ parent }) => parent?.menu?.length > 0,
    },
  ],
  initialValue: {
    newTab: false,
  },
};

const button = {
  name: 'button',
  title: 'Button',
  type: 'object',
  groups: genericGroups,
  fields: [
    basicTitle,
    content,
    buttonSettings,
  ],
};

export default button;


// TODO: Consider not putting everything into objects,
// makes it easier to actually access everything in a parent param
// Might be able to use the parent param to hide fields based on other fields
// Specifically, to allow for the canOverride thing to work properly