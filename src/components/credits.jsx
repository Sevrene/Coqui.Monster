'use client';

import { Box, Button, Grid, Typography } from '@mui/material';
import { Brush, MusicNote, Palette } from '@mui/icons-material';

import CreditsChip from './creditsChip';
import { DrawerContext } from './drawerCtxProvider';
import { IconMusic } from '@tabler/icons-react';
import { mainCredits } from '@/mockData';
import { useContext } from 'react';

/**
 * Renders the Credits component.
 * @returns {JSX.Element} The rendered Credits component.
 */
export default function Credits() {
  const { openDrawer, toggleDrawer } = useContext(DrawerContext);

  const isOpen = openDrawer === 'music';

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      textAlign='center'
    >
      <Typography
        variant='h4'
        sx={{
          '@media (max-width:400px)': {
            fontSize: '1.9rem',
          },
          margin: '16px 0',
        }}
      >
        🔪🐸 MAIN CREDITS 🐸🔪
      </Typography>
      <Grid container spacing={2} columns={2} maxWidth='80%'>
        {mainCredits.map((credit) => (
          <Grid item key={credit.title} xs={1}>
            <CreditsChip {...credit} />
          </Grid>
        ))}
        <Grid item xs={1}>
          <Typography
            variant='h5'
            sx={{
              '@media (max-width:400px)': {
                fontSize: '1.9rem',
              },
              margin: '16px 0',
            }}
          >
            🔪🐸 MUSIC CREDITS 🐸🔪
          </Typography>
          <Button
            onClick={() => {
              toggleDrawer('music');
            }}
            variant='contained'
            color='brandPurple'
            target='_blank'
            rel='noopener noreferrer'
            startIcon={<MusicNote />}
            endIcon={<IconMusic />}
          >
            Open Full List
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Typography
            variant='h5'
            sx={{
              '@media (max-width:400px)': {
                fontSize: '1.9rem',
              },
              margin: '16px 0',
            }}
          >
            🔪🐸 MISC CREDITS 🐸🔪
          </Typography>
          <Button
            variant='contained'
            color='brandPurple'
            target='_blank'
            rel='noopener noreferrer'
            startIcon={<Palette />}
            endIcon={<Brush />}
          >
            Open Full List
          </Button>
        </Grid>
      </Grid>
      <Typography
        variant='h5'
        sx={{
          '@media (max-width:400px)': {
            fontSize: '1.9rem',
          },
          marginTop: '64px',
        }}
      >
        Credits Missing?
      </Typography>
      <Typography variant='body1'>
        Contact{' '}
        <Box
          component='a'
          href='https://discord.com/users/167827741360652290'
          sx={{
            color: 'inherit',
          }}
        >
          Sevrene
        </Box>{' '}
        or Coqui with details
      </Typography>
    </Box>
  );
}
