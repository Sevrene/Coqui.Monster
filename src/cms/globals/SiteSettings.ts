import type { GlobalConfig } from 'payload';
import { AdminGroups } from '../utils/adminGroups';

const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  /* Versions are currently broken on globals in Payload. Uncomment when fixed.
  // https://github.com/payloadcms/payload/issues/11879
  versions: {
    drafts: true,
    max: 5,
  },
  */
  admin: {
    group: AdminGroups.SITE,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          description: 'General site settings',
          fields: [],
        },
        {
          label: 'Twitch Player',
          description: 'Settings for the Twitch player',
          fields: [
            {
              name: 'twitchPlayer',
              type: 'group',
              label: 'Twitch Player',
              fields: [
                {
                  name: 'channelName',
                  type: 'text',
                  label: 'Twitch Channel Name',
                  required: true,
                  admin: {
                    description:
                      'The name of the Twitch channel to display in the player.',
                  },
                },
                {
                  name: 'scheduleImage',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    description:
                      'Image to display under "Schedule" when the Twitch channel is offline.',
                  },
                },
                {
                  name: 'extraImage',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    description:
                      'Image to display under "While You Wait" when the Twitch channel is offline. Meant for anything & everything.',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default SiteSettings;
