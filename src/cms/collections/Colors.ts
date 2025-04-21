import { colorPickerField } from '@innovixx/payload-color-picker-field';
import type { CollectionConfig } from 'payload';

export const Colors: CollectionConfig = {
  slug: 'colors',
  admin: {
    useAsTitle: 'name',
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
      required: true,
      admin: {
        description: 'Color value',
      },
    }),
  ],
};
