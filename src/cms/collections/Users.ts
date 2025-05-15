import type { CollectionConfig } from 'payload';
import { checkRole } from './access/checkRole';

// NOTE: If users are ever intended to grow beyond a single admin user
// This should be updated to use a more robust access control system and editing capabilities
export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    hidden: true,
    hideAPIURL: process.env.NODE_ENV === 'production',
  },
  access: {
    read: ({ req: { user } }) => checkRole(['admin'], user),
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  auth: true,
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
      admin: {
        components: {
          Field: '@/cms/components/fields/chipField.tsx',
        },
      },
    },
  ],
};
