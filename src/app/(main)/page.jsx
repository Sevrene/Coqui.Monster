import { Box, Divider, Stack } from '@mui/material';
import { aboutSection, threeAmSection, voiceActingSection } from '@/mockData';

import ComedyWrapper from '@/components/comedyWrapper';
import ContentSection from '@/components/contentSection';
import Credits from '@/components/credits';
import MusicDrawer from '@/components/musicDrawer';
import MusicPlayer from '@/components/musicPlayer';
import SupportSection from '@/components/supportSection';
import VoiceActingSection from '@/components/voiceActingSection';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginTop: '64px',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '1920px',
          color: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'column', lg: 'row' },
          }}
        >
          <Box sx={{ flex: '60%', flexGrow: 1 }}>
            <Box style={{ position: 'relative', paddingBottom: '56.25%' }}>
              <iframe // TODO: Suggest friends channels when offline
                style={{ position: 'absolute', width: '100%', height: '100%' }}
                title='livestream'
                src={
                  'https://player.twitch.tv/?channel=' +
                  'coqui' +
                  '&muted=true&parent=coqui.monster&parent=coqui-monster.netlify.app&parent=localhost'
                }
                allowFullScreen
              />
            </Box>
            <Box display='flex' justifyContent='center' marginTop='24px'>
              <SupportSection />
            </Box>
          </Box>
          <Stack
            sx={{
              flex: '40%',
              padding: '16px',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <ContentSection {...aboutSection} />
            <ContentSection {...threeAmSection} />
          </Stack>
        </Box>
        <Divider sx={{ margin: '32px 0' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'column', lg: 'row' },
          }}
        >
          <Box sx={{ flex: '60%', flexGrow: 1, marginBottom: '32px' }}>
            <Credits />
          </Box>
          <Box
            sx={{
              flex: '40%',
              margin: '16px',
            }}
          >
            <VoiceActingSection />
          </Box>
        </Box>
      </Box>
      <Box>
        <MusicDrawer />
        <MusicPlayer />
      </Box>
      <ComedyWrapper />
    </main>
  );
}
