'use client';

import { Box, Fab } from '@mui/material';

import { DrawerContext } from '@/providers/drawerCtxProvider';
import { IconMenu2 } from '@tabler/icons-react';
import { Redirect } from '@/payload-types';
import RedirectsMenu from './redirectsMenu';
import { useContext } from 'react';

interface RedirectsFabProps {
  redirects: Redirect[];
}

export default function RedirectsFab({ redirects }: RedirectsFabProps) {
  const { toggleDrawer } = useContext(DrawerContext);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        bottom: '32px',
        right: '16px',
      }}
    >
      <Fab
        onClick={() => toggleDrawer('redirects')}
        variant='extended'
        color='primary'
        sx={{
          border: '1px solid black',
          boxShadow: '5px -5px 10px 0 black',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '5px -5px 10px 0 black',
            transform: 'translate(-2px, 2px)',
          },
        }}
      >
        Redirects
        <IconMenu2 />
      </Fab>
      <RedirectsMenu redirects={redirects} />
    </Box>
  );
}
