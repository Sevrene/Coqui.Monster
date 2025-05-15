import { validateUrl } from '@payloadcms/richtext-lexical';
import type { GlobalConfig } from 'payload';
import resolveSocialUsage from '../hooks/resolveSocialUsage';
import { AdminGroups } from '../utils/adminGroups';

const Footer: GlobalConfig = {
  slug: 'footer',
  /* Versions are currently broken on globals in Payload. Uncomment when fixed.
  // https://github.com/payloadcms/payload/issues/11879
  versions: {
    drafts: true,
    max: 5,
  },
  */
  admin: {
    group: AdminGroups.CONTENT,
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
                    description: 'Choose a background color for the footer.',
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
                    description: 'Choose a gradient for the footer background.',
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
          admin: {
            description: 'This will be displayed in the footer. Read-only.',
            readOnly: true,
          },
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enable Dev Handle',
              defaultValue: true,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'devHandle',
                  type: 'text',
                  label: 'Dev Handle',
                  defaultValue: 'Sevrene',
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
