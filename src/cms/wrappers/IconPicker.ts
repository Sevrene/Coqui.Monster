import tablerIconList from '@/cms_data/tabler-icons.json';
import { iconPickerField } from '@innovixx/payload-icon-picker-field';
import { TextField } from 'payload';

const iconMap = (
  tablerIconList as Array<{ name: string; component: string }>
).reduce(
  (acc, icon) => {
    acc[icon.name] = icon.component;
    return acc;
  },
  {} as Record<string, string>
);

export const IconPicker = (
  config: Omit<Parameters<typeof iconPickerField>[0], 'icons'>
) => {
  return iconPickerField({
    ...config,
    icons: iconMap,
  } as Partial<TextField> & { icons: Record<string, string> });
};
