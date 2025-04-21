import type { CollectionConfig } from 'payload';
import { validateURL } from '../validators/urlValidate';

const Redirects: CollectionConfig = {
  slug: 'redirects',
  admin: {
    useAsTitle: 'source',
  },
  fields: [
    {
      name: 'source',
      type: 'text',
      required: true,
      unique: true,
      validate: (value) => {
        if (value && !value.startsWith('/')) {
          return 'Source must start with a "/"';
        }
        return true;
      },
      admin: {
        description:
          'The path you want to redirect from. Must start with a "/"',
        placeholder: '/example',
        width: '30%',
        style: {
          width: 'var(--field-width)',
        },
      },
    },
    {
      name: 'destination',
      type: 'text',
      required: true,
      validate: (value) => {
        if (value) {
          // Allow local redirects
          if (value.startsWith('/')) {
            return true;
          }
          // Otherwise validate as a full URL
          return validateURL(value);
        }
        return true;
      },
      admin: {
        description: 'The path/url you want to redirect to',
        width: '30%',
        style: {
          width: 'var(--field-width)',
        },
      },
    },
    {
      name: 'permanent',
      type: 'checkbox',
      required: true,
      defaultValue: false,
      admin: {
        description:
          "301 Redirect (If you don't know what this means, do not check this box)",
      },
    },
  ],
};

export default Redirects;
