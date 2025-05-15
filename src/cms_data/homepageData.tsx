import type { Homepage } from '@/payload-types';
import { getGlobal } from '@/utils/getGlobals';

export interface ParsedHomepageData {
  supportButtons: Homepage['supportButtons'];
  communityButtons: Homepage['communityButtons'];
  aboutSections: Homepage['aboutSections'];
}

function parsePageData(
  pageData: Pick<
    Homepage,
    'supportButtons' | 'communityButtons' | 'aboutSections'
  >
): ParsedHomepageData {
  const { supportButtons, communityButtons, aboutSections } = pageData;

  return {
    supportButtons,
    communityButtons,
    aboutSections,
  };
}

export const getHomepageData = async (): Promise<ParsedHomepageData> => {
  const selectClause = {
    supportButtons: true,
    communityButtons: true,
    aboutSections: true,
  };
  const pageData = (await getGlobal('homepage', 3, selectClause)) as Pick<
    Homepage,
    'supportButtons' | 'communityButtons' | 'aboutSections'
  >;

  return parsePageData(pageData);
};
