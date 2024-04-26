/* eslint-disable import/no-anonymous-default-export */

import background from "./abstracts/background";

export default {
  name: 'theme',
  title: 'Theme',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    background,
  ],
};
