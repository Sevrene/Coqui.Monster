import { colorPickerField } from '@innovixx/payload-color-picker-field';
import type { CollectionConfig } from 'payload';
import { AdminGroups } from '../utils/adminGroups';

// This collection is used to store colors for use throughout the site
export const Colors: CollectionConfig = {
  slug: 'colors',
  /* Disabled for now until possibly working
  versions: {
    drafts: true,
    maxPerDoc: 5,
  },
  */
  admin: {
    useAsTitle: 'name',
    group: AdminGroups.SYSTEM,
    hideAPIURL: process.env.NODE_ENV === 'production',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Color name',
      },
    },
    colorPickerField({
      name: 'color',
      label: 'Color',
      required: true,
      admin: {
        description: 'Color value',
        components: {
          Cell: '@/cms/components/cells/colorPickerCell.tsx',
        },
      },
    }),
  ],
};
