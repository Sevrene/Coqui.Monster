import { ParsedTwitchData, getTwitchData } from '@/cms_data/twitchData';
import { aboutSection, threeAmSection } from '@/mockData';
import { Box, Divider, Stack } from '@mui/material';

import ContentSection from '@/components/contentSection';
import ComedyWrapper from '@/components/sections/comedy/comedyWrapper';
import CommunitySection from '@/components/sections/community/communitySection';
import Credits from '@/components/sections/credits/credits';
import MusicPlayer from '@/components/sections/credits/music/musicPlayer';
import StreamViewer from '@/components/sections/stream/streamViewer';
import SupportSection from '@/components/sections/support/supportSection';
import VoiceActing from '@/components/sections/voice_acting/voiceActing';
import { ReactNode } from 'react';

export default async function Home(): Promise<ReactNode> {
  const twitchData: ParsedTwitchData = await getTwitchData();

  return (
    <main
      id='main'
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginTop: '96px',
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
            padding: '16px',
          }}
        >
          <Box sx={{ flex: '60%' }}>
            <StreamViewer
              channel={twitchData.channelName}
              scheduleImage={twitchData.scheduleImage}
              extraImage={twitchData.extraImage}
            />
          </Box>
          <Stack
            spacing={{ xs: 4, lg: 2 }}
            sx={{
              flex: '40%',
              justifyContent: 'space-evenly',
            }}
          >
            <ContentSection {...aboutSection} />
            <ContentSection {...threeAmSection} />
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 2, lg: 0 }}
          sx={{
            padding: '16px',
          }}
        >
          <Box sx={{ flex: 0.6 }}>
            <SupportSection />
          </Box>
          <Box sx={{ flex: 0.4 }}>
            <CommunitySection />
          </Box>
        </Stack>
        <Divider sx={{ margin: '32px 0' }} />
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={{ xs: 2, lg: 0 }}
          sx={{
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
