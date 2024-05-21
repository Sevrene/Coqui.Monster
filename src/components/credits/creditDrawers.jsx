import { Box } from '@mui/material';
import { Brush } from '@mui/icons-material';
import DrawerContainer from './drawerContainer';
import { IconMusic } from '@tabler/icons-react';
import MiscCreditsList from './misc/miscCreditList';
import MiscDrawer from './misc/miscDrawer';
import MusicCreditsList from './music/musicCreditList';
import MusicDrawer from './music/musicDrawer';
import { miscCredits } from '@/mockData';
import { musicCredits } from '@/mockData';

/**
 * Renders the CreditDrawers component.
 * @returns {JSX.Element} The rendered CreditDrawers component.
 */
export default function CreditDrawers() {
  return (
    <>
      <DrawerContainer pullTabProps={{ top: '45%' }}>
        <MusicDrawer>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '16px',
              backgroundColor: 'brandYellow.main',
              border: '1px solid black',
            }}
          >
            <IconMusic color='black' />
          </Box>
          <MusicCreditsList credits={musicCredits} />
        </MusicDrawer>
      </DrawerContainer>
      <DrawerContainer pullTabProps={{ top: '55%' }}>
        <MiscDrawer>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '16px',
              backgroundColor: 'brandYellow.main',
              border: '1px solid black',
            }}
          >
            <Brush sx={{ color: 'black' }} />
          </Box>
          <MiscCreditsList credits={miscCredits} />
        </MiscDrawer>
      </DrawerContainer>
    </>
  );
}
