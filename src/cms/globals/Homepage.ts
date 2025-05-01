import type { GlobalConfig } from 'payload';
import { AdminGroups } from '../utils/adminGroups';
import { IconPicker } from '../wrappers/IconPicker';

const Homepage: GlobalConfig = {
  slug: 'homepage',
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
      type: 'tabs',
      tabs: [
        {
          label: 'Link Buttons',
          description: 'Support and Community links',
          fields: [
            {
              type: 'array',
              name: 'supportButtons',
              label: 'Support Buttons',
              admin: {
                components: {
                  RowLabel: {
                    path: '@/cms/components/overrides/rowLabelTitle.tsx',
                    clientProps: {
                      arrayKey: 'supportButtons',
                    },
                  },
                },
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'label', type: 'text', required: true },
                    { name: 'tooltip', type: 'text' },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    IconPicker({
                      name: 'icon',
                      required: true,
                      label: 'Icon',
                      admin: {
                        width: '30%',
                        // TODO: This currently does not work unless the PR gets merged. If the original dev is not available, will just need to fork the repo and recreate the component.
                        placeholder: 'Select an icon',
                        components: {
                          Description:
                            '@/cms/components/overrides/iconPickerDescription.tsx',
                        },
                      },
                    }),
                    { name: 'url', type: 'text', required: true },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'variant',
                      type: 'radio',
                      options: ['contained', 'outlined', 'text'],
                      defaultValue: 'contained',
                    },
                    {
                      name: 'color',
                      type: 'radio',
                      options: ['primary', 'secondary', 'inherit'],
                      defaultValue: 'primary',
                    },
                  ],
                },
                { name: 'fullWidth', type: 'checkbox' },
              ],
            },
            {
              type: 'array',
              name: 'communityButtons',
              label: 'Community Buttons',
              admin: {
                components: {
                  RowLabel: {
                    path: '@/cms/components/overrides/rowLabelTitle.tsx',
                    clientProps: {
                      arrayKey: 'communityButtons',
                    },
                  },
                },
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'label', type: 'text', required: true },
                    { name: 'tooltip', type: 'text' },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    IconPicker({
                      name: 'icon',
                      required: true,
                      label: 'Icon',
                      admin: {
                        width: '30%',
                        // TODO: This currently does not work unless the PR gets merged. If the original dev is not available, will just need to fork the repo and recreate the component.
                        placeholder: 'Select an icon',
                        components: {
                          Description:
                            '@/cms/components/overrides/iconPickerDescription.tsx',
                        },
                      },
                    }),
                    { name: 'url', type: 'text', required: true },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'variant',
                      type: 'radio',
                      options: ['contained', 'outlined', 'text'],
                      defaultValue: 'contained',
                    },
                    {
                      name: 'color',
                      type: 'radio',
                      options: ['primary', 'secondary', 'inherit'],
                      defaultValue: 'primary',
                    },
                  ],
                },
                { name: 'fullWidth', type: 'checkbox' },
              ],
            },
          ],
        },
        {
          label: 'About',
          fields: [
            {
              type: 'array',
              name: 'aboutSections',
              label: 'About Sections',
              fields: [
                { name: 'title', type: 'text', required: true },
                {
                  name: 'content',
                  type: 'richText',
                  required: true,
                },
                {
                  name: 'imagePosition',
                  type: 'radio',
                  options: ['left', 'right'],
                  defaultValue: 'left',
                },
                { name: 'image', type: 'upload', relationTo: 'media' },
              ],
            },
          ],
        },
        {
          label: 'Credits',
          description: 'Credits sections',
          fields: [],
        },
        {
          label: 'Voice Acting',
          fields: [],
        },
      ],
    },
    {
      name: 'siteSettingsLink',
      type: 'ui',
      label: 'Looking for Twitch Stream settings?',
      admin: {
        position: 'sidebar',
        components: {
          Field: '@/cms/components/fields/rerouteField.tsx',
        },
        custom: {
          link: '/admin/globals/site-settings',
        },
      },
    },
    {
      name: 'themeLink',
      type: 'ui',
      label: 'Looking for Default Color settings?',
      admin: {
        position: 'sidebar',
        components: {
          Field: '@/cms/components/fields/rerouteField.tsx',
        },
        custom: {
          link: '/admin/globals/theme',
        },
      },
    },
  ],
};

export default Homepage;
