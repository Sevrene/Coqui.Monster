import type { Footer } from '@/payload-types';
import { getGlobal } from '@/utils/getGlobals';
import { formatBackgroundStyle } from '@/utils/styleUtils';

export interface ParsedFooterData {
  background: string;
  socials: Footer['socials'];
  socialsSecondary: Footer['socials'];
  contact: string;
  devHandle: Footer['devHandle'];
}

function parseFooterData(footerData: Footer) {
  const socials = footerData.socials;
  const socialsSecondary = footerData.socialsSecondary;
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
