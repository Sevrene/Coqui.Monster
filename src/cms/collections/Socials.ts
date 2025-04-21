import { colorPickerField } from '@innovixx/payload-color-picker-field';
import { validateUrl } from '@payloadcms/richtext-lexical';
import type { CollectionConfig } from 'payload';
import { IconPicker } from '../wrappers/IconPicker';

export const Socials: CollectionConfig = {
  slug: 'socials',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        width: '30%',
        style: {
          width: 'var(--field-width)',
        },
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
        description: 'Social media URL',
        width: '30%',
        style: {
          width: 'var(--field-width)',
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
          admin: {
            description:
              'Note: This is not a searchable field, only the opened menu is.',
            width: '30%',
            style: {
              width: 'var(--field-width)',
            },
          },
          label: 'Icon',
        }),
        colorPickerField({
          name: 'color',
          required: true,
          admin: {
            width: '30%',
            style: {
              width: 'var(--field-width)',
            },
          },
        }),
      ],
    },
    {
      name: 'assignedTo',
      type: 'text',
      hasMany: true,
      label: 'Locations where this social is used',
      defaultValue: ['None'],
      admin: {
        components: {
          Field: '@/cms/components/ChipField.tsx',
        },
      },
    },
  ],
};
