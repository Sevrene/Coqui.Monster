import { colorPickerField } from '@innovixx/payload-color-picker-field';
import { validateUrl } from '@payloadcms/richtext-lexical';
import type { CollectionConfig } from 'payload';
import { AdminGroups } from '../utils/adminGroups';
import { IconPicker } from '../wrappers/IconPicker';

export const Socials: CollectionConfig = {
  slug: 'socials',
  versions: {
    drafts: true,
    maxPerDoc: 5,
  },
  admin: {
    useAsTitle: 'name',
    group: AdminGroups.SYSTEM,
    hideAPIURL: process.env.NODE_ENV === 'production',
    defaultColumns: [
      'name',
      'url',
      'appearance',
      'assignedTo',
      'updatedAt',
      'createdAt',
    ],
  },
  access: {
    // TODO: Consider if this should be public or not
    read: ({ req: { user } }) => {
      return Boolean(user);
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'This name will be used for the tooltip',
      },
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      validate: (value) => {
        if (value) {
          return validateUrl(value)
            ? true
            : 'Value must be a valid URL with "http" or "https"';
        }
        return true;
      },
      admin: {
        components: {
          Cell: '@/cms/components/cells/linkCell.tsx',
        },
      },
    },
    {
      name: 'appearance',
      type: 'group',
      label: 'Appearance',
      fields: [
        IconPicker({
          name: 'icon',
          required: true,
          label: 'Icon',
          admin: {
            // TODO: This currently does not work unless the PR gets merged. If the original dev is not available, will just need to fork the repo and recreate the component.
            placeholder: 'Select an icon',
            components: {
              Description:
                '@/cms/components/overrides/iconPickerDescription.tsx',
            },
          },
        }),
        colorPickerField({
          name: 'color',
          required: true,
          label: 'Icon Color',
        }),
      ],
      admin: {
        components: {
          Cell: '@/cms/components/cells/iconCell.tsx',
        },
      },
    },
    {
      name: 'assignedTo',
      type: 'text',
      hasMany: true,
      label: 'Locations',
      defaultValue: ['None'],
      admin: {
        position: 'sidebar',
        description: 'Where this social media link is used',
        components: {
          Field: '@/cms/components/chipField.tsx',
          Cell: '@/cms/components/cells/chipCell.tsx',
        },
      },
    },
  ],
};
