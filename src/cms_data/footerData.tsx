import type { Footer, Social } from '@/payload-types';

import { formatBackgroundStyle } from '@/utils/styleUtils';
import { getGlobal } from '@/utils/getGlobals';

export interface ParsedFooterData {
  background: string;
  socials: Social[];
  socialsSecondary: Social[];
  contact: string;
  devHandle: Footer['devHandle'];
}

function parseFooterData(footerData: Footer) {
  const socials = footerData.socials as Social[];
  const socialsSecondary = footerData.socialsSecondary as Social[];
  const contact = footerData.contact;
  const devHandle = footerData.devHandle;

  let background: string;
  switch (footerData.behaviorSettings.background.type) {
    case 'none':
      background = 'transparent';
      break;
    case 'solid':
      background = formatBackgroundStyle(
        footerData.behaviorSettings.background
      );
      break;
    case 'gradient':
      background = formatBackgroundStyle(
        footerData.behaviorSettings.background
      );
      break;
    default:
      console.error('Invalid background type');
      background = 'transparent';
  }

  return { background, socials, socialsSecondary, contact, devHandle };
}

export const getFooterData = async (): Promise<ParsedFooterData> => {
  const footerData = (await getGlobal('footer', 2)) as Footer;

  return parseFooterData(footerData);
};
