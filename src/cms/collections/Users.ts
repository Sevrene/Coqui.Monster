import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    hidden: true,
    hideAPIURL: process.env.NODE_ENV === 'production',
  },
  access: {
    read: () => true,
    create: () => false, // TODO: Check if this causes issues with the initial user creation
    update: () => false,
    delete: () => false,
  },
  auth: true,
  fields: [
    // Email added by default
  ],
};
