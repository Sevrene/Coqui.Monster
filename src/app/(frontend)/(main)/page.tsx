import { ParsedHomepageData, getHomepageData } from '@/cms_data/homepageData';
import { ParsedTwitchData, getTwitchData } from '@/cms_data/twitchData';
import { Box, Divider, Icon, Stack } from '@mui/material';

import ButtonGrid from '@/components/sections/button_grid/buttonGrid';
import ComedyWrapper from '@/components/sections/comedy/comedyWrapper';
import ContentBlock from '@/components/sections/contentBlock';
import Credits from '@/components/sections/credits/credits';
import MusicPlayer from '@/components/sections/credits/music/musicPlayer';
import StreamViewer from '@/components/sections/stream/streamViewer';
import VoiceActing from '@/components/sections/voice_acting/voiceActing';
import { IconBolt } from '@tabler/icons-react';
import { ReactNode } from 'react';

export default async function Home(): Promise<ReactNode> {
  const twitchData: ParsedTwitchData = await getTwitchData();
  const pageData: ParsedHomepageData = await getHomepageData();

  return (
    <main
      id='main'
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,

        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '1920px',
          color: 'white',
        }}
      >
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 4, lg: 0 }}
          sx={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: { xs: '0', lg: '16px' },
          }}
        >
          {/* TODO: Test out different widths */}
          <Box sx={{ width: { xs: '100%', lg: '75%' } }}>
            <StreamViewer
              channel={twitchData.channelName}
              scheduleImage={twitchData.scheduleImage}
              extraImage={twitchData.extraImage}
            />
          </Box>
        </Stack>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 2, lg: 0 }}
          sx={{
            justifyContent: 'space-evenly',
            padding: '16px',
          }}
        >
          <Box sx={{ flex: 0.4 }}>
            <ButtonGrid
              title={`Support ${process.env.NEXT_PUBLIC_TALENT_NAME}`}
              buttonGroup={pageData.supportButtons}
            />
          </Box>
          <Box sx={{ flex: 0.4 }}>
            <ButtonGrid
              title={`Community`}
              buttonGroup={pageData.communityButtons}
            />
          </Box>
        </Stack>
        {pageData.aboutSections?.length > 0 && (
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            flexWrap='wrap'
            sx={{
              justifyContent: 'space-evenly',
              padding: '16px',
              rowGap: { xs: 2, lg: 6 },
              columnGap: 0,
            }}
          >
            {pageData.aboutSections.map((section, index) => (
              <Box key={index} sx={{ flex: '0 1 40%', padding: '16px 0' }}>
                <ContentBlock {...section} />
              </Box>
            ))}
          </Stack>
        )}
        <Divider
          sx={{
            margin: '48px 0',
            borderColor: 'white',
            '&::before, &::after': {
              borderTop: '1px solid white',
            },
          }}
        >
          <Icon
            // @ts-expect-error - This is a valid type but is custom
            color='link'
          >
            <IconBolt />
          </Icon>
        </Divider>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 2, lg: 0 }}
          sx={{
            justifyContent: 'space-evenly',
            padding: '16px',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Credits />
          </Box>
          <Box sx={{ flex: 1 }}>
            <VoiceActing />
          </Box>
        </Stack>
      </Box>
      <MusicPlayer />
      <ComedyWrapper />
    </main>
  );
}
