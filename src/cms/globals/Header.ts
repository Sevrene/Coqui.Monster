import {
  BoldFeature,
  FixedToolbarFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  UnderlineFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

import type { GlobalConfig } from 'payload';
import resolveSocialUsage from '../hooks/resolveSocialUsage';
import { AdminGroups } from '../utils/adminGroups';

const Header: GlobalConfig = {
  slug: 'header',
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
      name: 'announcement',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'richText',
          label: 'Announcement Text',
          editor: lexicalEditor({
            features: [
              FixedToolbarFeature(),
              ParagraphFeature(),
              BoldFeature(),
              ItalicFeature(),
              UnderlineFeature(),
              LinkFeature({
                enabledCollections: ['redirects'],
                fields: ({ defaultFields }) => [...defaultFields],
              }),
            ],
          }),
        },
        {
          name: 'color',
          type: 'relationship',
          relationTo: 'colors',
          label: 'Announcement Color',
          admin: {
            description:
              'The color of the announcement bar. Defaults to the link theme color.',
          },
        },
        {
          name: 'linkColorOverride',
          type: 'relationship',
          relationTo: 'colors',
          label: 'Link Color Override',
          admin: {
            description:
              'Overrides the link color in the announcement text. Defaults to the link theme color.',
          },
        },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'socials',
      type: 'relationship',
      relationTo: 'socials',
      hasMany: true,
      minRows: 0,
      maxRows: 5,
      admin: {
        isSortable: true,
        description: 'Social media icons that will be displayed in the header.',
      },
      hooks: {
        afterChange: [resolveSocialUsage('Header')],
      },
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
              name: 'mode',
              type: 'radio',
              label: 'Header Mode',
              admin: {
                description:
                  'Sticky: Moves with the page. Static: Never moves.',
              },
              options: [
                { label: 'Sticky', value: 'sticky' },
                { label: 'Static', value: 'static' },
              ],
              defaultValue: 'sticky',
              required: true,
            },
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
                {
                  name: 'fadeIn',
                  type: 'checkbox',
                  label: 'Fade In',
                  admin: {
                    condition: (data, siblingData) => {
                      const conditionMet =
                        siblingData.type !== 'none' &&
                        data.behaviorSettings.mode === 'sticky';
                      if (!conditionMet) {
                        siblingData.fadeIn = false; // Reset to false if condition fails
                      }
                      return conditionMet;
                    },
                    description:
                      'If enabled, start with a transparent background and fade in as the user scrolls.',
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

export default Header;
