'use client';

import {
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SwipeableDrawer,
  Tooltip,
  useTheme,
} from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';

import { Box } from '@mui/system';
import { DrawerContext } from './drawerCtxProvider';
import IconButton from '@mui/material/IconButton';
import { IconMusic } from '@tabler/icons-react';
import { MusicPlayerContext } from './musicPlayerCtxProvider';
import { musicCredits } from '@/mockData';
import { useContext } from 'react';

function MusicCredit({ credit }) {
  const { switchTrack, currentSong, playing, playAudio, pauseAudio } =
    useContext(MusicPlayerContext);

  const handlePlay = () => {
    if (currentSong?.track === credit.track) {
      if (playing) {
        pauseAudio();
      } else {
        playAudio();
      }
    } else {
      switchTrack(credit);
    }
  };

  const isCurrentSong = currentSong?.track === credit.track;

  return (
    <ListItem style={{ display: 'flex' }} divider>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ListItemAvatar style={{ display: 'flex', justifyContent: 'center' }}>
            {credit.image && (
              <Avatar alt={credit.songName} src={credit.image} />
            )}
          </ListItemAvatar>
          <ListItemText primary={credit.songName} secondary={credit.artist} />
          <IconButton style={{ height: '50%' }} onClick={handlePlay}>
            {isCurrentSong && playing ? <Pause /> : <PlayArrow />}{' '}
          </IconButton>
        </Box>
        <Box width='80%' display='flex' marginLeft='auto'>
          <Button href={credit.artistSocials} target='_blank'>
            Song
          </Button>
          <Button href={credit.artistSocials} target='_blank'>
            Artist
          </Button>
        </Box>
      </Box>
    </ListItem>
  );
}

function MusicCreditsList({ credits }) {
  return (
    <List style={{ minWidth: '300px' }}>
      {credits.map((credit) => (
        <MusicCredit key={credit.songName} credit={credit} />
      ))}
    </List>
  );
}

export default function MusicDrawer() {
  const { openDrawer, toggleDrawer } = useContext(DrawerContext);
  const theme = useTheme();

  const isOpen = openDrawer === 'music';

  return (
    <Box
      sx={{
        position: 'fixed',
        right: '-48px',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      <Tooltip title='Music Credits' placement='top-start'>
        <Button
          onClick={() => toggleDrawer('music')}
          variant='contained'
          size='large'
          color='brandYellow'
          startIcon={<IconMusic />}
          sx={{
            border: '1px solid black',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            boxShadow: '-5px -5px 10px 0 black',
            paddingRight: '48px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '-5px -5px 10px 0 black',
              transform: 'translateX(-25%)',
            },
          }}
        />
      </Tooltip>
      <Drawer anchor='right' open={isOpen} onClose={() => toggleDrawer(null)}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '16px',
            backgroundColor: theme.palette.brandYellow.main,
            border: '1px solid black',
          }}
        >
          <IconMusic color='black' />
        </Box>
        <MusicCreditsList credits={musicCredits} />
      </Drawer>
    </Box>
  );
}
