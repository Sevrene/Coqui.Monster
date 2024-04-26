'use client';

import {
  Box,
  IconButton,
  LinearProgress,
  Slide,
  Typography,
} from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';

import { Close } from '@mui/icons-material';
import { MusicPlayerContext } from './musicPlayerCtxProvider';
import { constStyles } from '@/styles/constStyles';
import { useTheme } from '@emotion/react';

function MusicPlayer() {
  const { currentSong, playing, pauseAudio } = useContext(MusicPlayerContext);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (
      currentSong &&
      audioRef.current &&
      audioRef.current.src !== currentSong.track
    ) {
      audioRef.current.src = currentSong.track;
      audioRef.current.onloadeddata = () => {
        if (playing) {
          audioRef.current.play();
        }
      };
    } else if (playing && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [currentSong, playing]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing && audioRef.current && audioRef.current.duration > 0) {
        setProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [playing]);

  return (
    <Box
      sx={{
        position: 'fixed',
        left: '50%',
        bottom: '16px',
        transform: 'translateX(-50%)',
      }}
    >
      <Slide direction='up' in={playing} mountOnEnter unmountOnExit>
        <Box
          sx={{
            padding: '8px 50px',
            backgroundColor: constStyles.brand3AM,
            borderRadius: '16px',
          }}
        >
          <Box sx={{ position: 'absolute', right: 0, top: 0 }}>
            <IconButton onClick={() => pauseAudio()}>
              <Close />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <a
                  href={currentSong?.songLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    textDecoration: 'none',
                    color: constStyles.brandYellow,
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{
                      fontSize: '1.0rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {currentSong?.songName}
                  </Typography>
                </a>
                <Typography variant='subtitle1'>
                  {currentSong?.artist}
                </Typography>
              </Box>
            </Box>
            <LinearProgress variant='determinate' value={progress} />
            <audio ref={audioRef} src={currentSong?.track} preload='auto' />
          </Box>
        </Box>
      </Slide>
    </Box>
  );
}

export default MusicPlayer;
