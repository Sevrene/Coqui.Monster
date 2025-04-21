import { miscCredits, musicCredits } from '@/mockData';

import { Brush } from '@mui/icons-material';
import { Box } from '@mui/material';
import { IconMusic } from '@tabler/icons-react';
import DrawerContainer from './drawerContainer';
import MiscCreditsList from './misc/miscCreditList';
import MiscDrawer from './misc/miscDrawer';
import MusicCreditsList from './music/musicCreditList';
import MusicDrawer from './music/musicDrawer';

/**
 * Renders the CreditDrawers component.
 * @returns {JSX.Element} The rendered CreditDrawers component.
 */
export default function CreditDrawers() {
  return (
    <>
      <DrawerContainer pullTabProps={{ top: `calc(50% - 48px)` }}>
        <MusicDrawer>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '16px',
              backgroundColor: 'links',
              border: '1px solid black',
            }}
          >
            <IconMusic color='black' />
          </Box>
          <MusicCreditsList credits={musicCredits} />
        </MusicDrawer>
      </DrawerContainer>
      <DrawerContainer pullTabProps={{ top: `calc(50% + 48px)` }}>
        <MiscDrawer>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '16px',
              backgroundColor: 'links',
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
