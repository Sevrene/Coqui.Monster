import type { Header, Media, Social } from '@/payload-types';

import { DynamicIcon } from '@/utils/dynamicIcon';
import { getGlobal } from '@/utils/getGlobals';
import { formatBackgroundStyle } from '@/utils/styleUtils';
import { JSX } from 'react';

export type SocialWithIcon = {
  name: string;
  url: string;
  appearance: {
    color: string;
    icon: JSX.Element;
  };
};

export interface ParsedHeaderData {
  announcement: Header['announcement'];
  fadeIn: boolean;
  logo: Media;
  headerMode: string;
  background: string;
  socials: SocialWithIcon[];
}

function parseHeaderData(headerData: Header) {
  const announcement = headerData.announcement;
  const fadeIn = headerData.behaviorSettings.background.fadeIn;
  const logo = headerData.logo as Media;
  const headerMode = headerData.behaviorSettings.mode;

  // Dynamic Icon is built on the server here to prevent possible reading of DynamicIcon on the client
  let socials: SocialWithIcon[] = [];
  const socialsArray = Array.isArray(headerData?.socials)
    ? (headerData.socials as Social[])
    : [];
  for (const social of socialsArray) {
    if (social.appearance.icon) {
      socials.push({
        name: social.name,
        url: social.url,
        appearance: {
          color: social.appearance.color,
          icon: <DynamicIcon name={social.appearance.icon} />,
        },
      });
    }
  }

  let background: string;
  switch (headerData.behaviorSettings.background.type) {
    case 'none':
      background = 'transparent';
      break;
    case 'solid':
      background = formatBackgroundStyle(
        headerData.behaviorSettings.background
      );
      break;
    case 'gradient':
      background = formatBackgroundStyle(
        headerData.behaviorSettings.background
      );
      break;
    default:
      console.error('Invalid background type');
      background = 'transparent';
  }

  return { announcement, fadeIn, logo, headerMode, background, socials };
}

export const getHeaderData = async (): Promise<ParsedHeaderData> => {
  const headerData = (await getGlobal('header', 2)) as Header;

  return parseHeaderData(headerData);
};
