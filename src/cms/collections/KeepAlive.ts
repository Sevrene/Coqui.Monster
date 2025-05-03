import type { CollectionConfig } from 'payload';

export const KeepAlive: CollectionConfig = {
  slug: 'keep-alive',
  access: {
    // TODO: Consider if this should be public or not
    read: ({ req: { user } }) => {
      return Boolean(user);
    },
  },
  admin: {
    hidden: true,
    hideAPIURL: process.env.NODE_ENV === 'production',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'random',
      type: 'text',
    },
  ],
};
