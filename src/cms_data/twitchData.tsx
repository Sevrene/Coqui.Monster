import type { Media, SiteSetting } from '@/payload-types';

import { getGlobal } from '@/utils/getGlobals';

export interface ParsedTwitchData {
  channelName: string;
  scheduleImage: {
    url: string;
    width: number;
    height: number;
  };
  extraImage: {
    url: string;
    width: number;
    height: number;
  };
}

function parseTwitchData(twitchData: Pick<SiteSetting, 'twitchPlayer'>) {
  const scheduleImageMedia = twitchData?.twitchPlayer?.scheduleImage as Media;
  const extraImageMedia = twitchData?.twitchPlayer?.extraImage as Media;
  const channelName = twitchData?.twitchPlayer?.channelName;
  const scheduleImage = {
    url: scheduleImageMedia?.url,
    width: scheduleImageMedia?.width,
    height: scheduleImageMedia?.height,
  };
  const extraImage = {
    url: extraImageMedia?.url,
    width: extraImageMedia?.width,
    height: extraImageMedia?.height,
  };

  return { channelName, scheduleImage, extraImage };
}

export const getTwitchData = async (): Promise<ParsedTwitchData> => {
  const selectClause = {
    twitchPlayer: true,
  };
  const twitchData = (await getGlobal(
    'site-settings',
    1,
    selectClause
  )) as Pick<SiteSetting, 'twitchPlayer'>;

  return parseTwitchData(twitchData);
};
