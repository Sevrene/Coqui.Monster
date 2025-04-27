import { validateUrl } from '@payloadcms/richtext-lexical';
import { RedirectsPluginConfig } from 'node_modules/@payloadcms/plugin-redirects/dist/types';
import { AdminGroups } from '../utils/adminGroups';

const redirectsPluginConfig: RedirectsPluginConfig = {
  collections: ['redirects'],
  overrides: {
    // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
    fields: ({ defaultFields }) => {
      const modifiedFields = defaultFields.map((field) => {
        if ('name' in field && field.name === 'from') {
          return {
            ...field,
            label: 'Source',
            unique: true,
            validate: (value: string): true | string => {
              if (value && !value.startsWith('/')) {
                return 'Source must start with a "/"';
              }
              return true;
            },
            hooks: {
              beforeChange: [
                ({ value }) => {
                  if (value) {
                    return value.replace(' ', '-');
                  }
                  return value;
                },
              ],
            },
            admin: {
              ...field.admin,
              description:
                'The path you want to redirect from. Must start with a "/"',
              placeholder: '/example',
            },
          };
        }

        if (field.type === 'group' && field.name === 'to') {
          return {
            ...field,
            label: 'Destination',
            admin: {
              ...field.admin,
              components: {
                Cell: '@/cms/components/cells/redirectCell.tsx',
              },
            },
            fields: field.fields.map((subField) => {
              if ('name' in subField && subField.name === 'type') {
                return {
                  ...subField,
                  // Exact same, just inverted the order of the options
                  defaultValue: 'custom',
                  admin: {
                    ...subField.admin,
                    readOnly: true,
                  },
                };
              }

              if ('name' in subField && subField.name === 'url') {
                return {
                  ...subField,
                  validate: (value: string): true | string => {
                    if (value) {
                      return validateUrl(value)
                        ? true
                        : 'Destination must be a valid URL';
                    }
                    return true;
                  },
                  admin: {
                    ...subField.admin,
                    description: 'The url to redirect to',
                  },
                };
              }
              return subField;
            }),
          };
        }

        return field;
      });

      return [
        ...modifiedFields,
        {
          type: 'checkbox',
          name: 'hidden',
          defaultValue: false,
          admin: {
            position: 'sidebar',
            description:
              'Hide this redirect from the public facing redirects list. The redirect will still work.',
          },
        },
      ];
    },
    admin: {
      useAsTitle: 'from',
      group: AdminGroups.SITE,
      hideAPIURL: process.env.NODE_ENV === 'production',
      defaultColumns: ['from', 'to', 'hidden', 'createdAt', 'updatedAt'],
    },
  },
  redirectTypes: ['301', '302'],
  redirectTypeFieldOverride: {
    defaultValue: '302',
    label: 'Redirect Type (Overridden)',
    admin: {
      position: 'sidebar',
      description: "If you don't know what this means, do not change this",
    },
  },
};

export default redirectsPluginConfig;
