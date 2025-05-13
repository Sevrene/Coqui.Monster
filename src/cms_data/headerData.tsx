import type { Header, Media } from '@/payload-types';

import { getGlobal } from '@/utils/getGlobals';
import { formatBackgroundStyle } from '@/utils/styleUtils';

export interface ParsedHeaderData {
  announcement: Header['announcement'];
  fadeIn: boolean;
  logo: Media;
  headerMode: string;
  background: string;
  socials: Header['socials'];
}

type HeaderMode = 'relative' | 'fixed';

function parseHeaderData(headerData: Header) {
  const announcement = headerData.announcement;
  const fadeIn = headerData.behaviorSettings.background.fadeIn;
  const logo = headerData.logo as Media;
  const socials = headerData.socials;
  const headerMode = headerData.behaviorSettings.mode;

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
