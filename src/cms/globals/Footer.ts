import type { GlobalConfig } from 'payload';
import resolveSocialUsage from '../hooks/resolveSocialUsage';
import { validateUrl } from '@payloadcms/richtext-lexical';

const Footer: GlobalConfig = {
  slug: 'footer',
  versions: {
    drafts: {
      autosave: true,
      schedulePublish: true,
    },
  },
  admin: {
    group: 'Content',
    description:
      'The footer is the bottom section of the website, containing social media links and contact information.',
  },
  fields: [
    {
      name: 'socials',
      type: 'relationship',
      relationTo: 'socials',
      hasMany: true,
      minRows: 0,
      maxRows: 5,
      admin: {
        isSortable: true,
        description: 'Social media icons that will be displayed in the footer.',
      },
      hooks: {
        afterChange: [resolveSocialUsage('Footer')],
      },
    },
    {
      name: 'socialsSecondary',
      type: 'relationship',
      relationTo: 'socials',
      hasMany: true,
      minRows: 0,
      maxRows: 5,
      admin: {
        isSortable: true,
        description:
          'Secondary set of social media icons that will be displayed as a seperate group in the footer.',
      },
      hooks: {
        afterChange: [resolveSocialUsage('Footer')],
      },
    },
    {
      type: 'email',
      name: 'contact',
      label: 'Contact Email',
    },
    {
      type: 'collapsible',
      label: 'Settings',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'behaviorSettings',
          type: 'group',
          label: 'Behavior Settings',
          fields: [
            {
              name: 'background',
              type: 'group',
              label: 'Background',
              fields: [
                {
                  name: 'type',
                  type: 'radio',
                  label: 'Background Type',
                  options: [
                    { label: 'None', value: 'none' },
                    { label: 'Solid', value: 'solid' },
                    { label: 'Gradient', value: 'gradient' },
                  ],
                  defaultValue: 'none',
                  required: true,
                },
                {
                  name: 'color',
                  type: 'relationship',
                  relationTo: 'colors',
                  label: 'Background Color',
                  admin: {
                    description: 'Choose a background color for the header.',
                    condition: (_, siblingData) => siblingData.type === 'solid',
                  },
                  required: true,
                },
                {
                  name: 'gradient',
                  type: 'relationship',
                  relationTo: 'gradients',
                  label: 'Background Gradient',
                  admin: {
                    description: 'Choose a gradient for the header background.',
                    condition: (_, siblingData) =>
                      siblingData.type === 'gradient',
                  },
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: 'devHandle',
          type: 'group',
          label: 'Dev Handle',
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enable Dev Handle',
              defaultValue: true,
              admin: {
                readOnly: true,
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'devHandle',
                  type: 'text',
                  label: 'Dev Handle',
                  defaultValue: 'Sevrene',
                  admin: {
                    readOnly: true,
                    description: 'This will be displayed in the footer.',
                  },
                },
                {
                  name: 'devHandleLink',
                  type: 'text',
                  label: 'Dev Handle Link',
                  defaultValue: 'https://discord.com/users/167827741360652290',
                  validate: (value) => {
                    if (value) {
                      return validateUrl(value)
                        ? true
                        : 'Value must be a valid URL with "http" or "https"';
                    }
                    return true;
                  },
                  admin: {
                    readOnly: true,
                    description:
                      'Any link that the dev handle should point to.',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Footer;
