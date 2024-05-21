import { Box, Divider, Stack } from '@mui/material';
import { aboutSection, threeAmSection } from '@/mockData';

import ComedyWrapper from '@/components/comedy/comedyWrapper';
import CommunitySection from '@/components/community/communitySection';
import ContentSection from '@/components/contentSection';
import Credits from '@/components/credits/credits';
import MusicPlayer from '@/components/credits/music/musicPlayer';
import StreamViewer from '@/components/stream/streamViewer';
import SupportSection from '@/components/support/supportSection';
import VoiceActing from '@/components/voice_acting/voiceActing';

/**
 * Renders the Home page component.
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <main
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
            <StreamViewer />
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
          <Box sx={{ flex: 1 }}>
            <SupportSection />
          </Box>
          <Box sx={{ flex: 1 }}>
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
