'use client';

import { Close, InfoOutlined, VolumeDown, VolumeUp } from '@mui/icons-material';
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  LinearProgress,
  Slide,
  Tooltip,
  Typography,
} from '@mui/material';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { MusicPlayerContext } from '@/providers/musicPlayerCtxProvider';
import { constStyles } from '@/styles/constStyles';

/**
 * Represents a music player component.
 *
 * @returns {JSX.Element} The music player component.
 */
function MusicPlayer() {
  const { currentSong, playing, pauseAudio } = useContext(MusicPlayerContext);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [audioTrack, setAudioTrack] = useState(null);
  const [audioStreams, setAudioStreams] = useState({});
  const [volume, setVolume] = useState(0.1);

  const setAudioSource = useCallback(
    (track) => {
      if (audioStreams[track]) {
        audioRef.current.src = audioStreams[track];
      } else {
        fetch(`/api/fetchSong?filename=${track}`)
          .then((response) => response.blob())
          .then((blob) => {
            const url = URL.createObjectURL(blob);
            audioRef.current.src = url;
            setAudioStreams((prevStreams) => ({
              ...prevStreams,
              [track]: url,
            }));
          });
      }
    },
    [audioStreams]
  );

  useEffect(() => {
    if (currentSong && currentSong.track != audioTrack) {
      setAudioSource(currentSong.track);

      audioRef.current.onloadeddata = () => {
        setProgress(0);
        audioRef.current.volume = volume;
        audioRef.current.play();
        setAudioTrack(currentSong.track);
      };
    } else if (playing && audioRef.current) {
      audioRef.current.volume = volume;
      if (!audioRef.current.src) {
        audioRef.current.src = audioStreams[currentSong.track];
      }
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [currentSong, audioTrack, audioStreams, playing, setAudioSource, volume]);

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
        minWidth: '300px',
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
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
            }}
          >
            <Tooltip
              title={
                <Typography variant='body2'>
                  Volume: {Math.round(volume * 100)}%
                </Typography>
              }
              placement='top'
            >
              <ButtonGroup variant='text' size='small'>
                <Button
                  onClick={() =>
                    setVolume((prevVolume) =>
                      Math.max((prevVolume - 0.1).toFixed(1), 0)
                    )
                  }
                  sx={{ borderTopLeftRadius: '16px' }}
                >
                  <VolumeDown />
                </Button>
                <Button
                  onClick={() =>
                    setVolume((prevVolume) =>
                      Math.min((prevVolume + 0.1).toFixed(1), 1)
                    )
                  }
                  sx={{ borderBottomRightRadius: '16px' }}
                >
                  <VolumeUp />
                </Button>
              </ButtonGroup>
            </Tooltip>
          </Box>
          <Box sx={{ position: 'absolute', left: 8, bottom: 0 }}>
            <Tooltip
              title={
                <Typography variant='body2'>
                  This music player is limited in functionality and is only
                  intended as a preview.
                  <br />
                  Check out the artists pages for a more comprehensive
                  experience.
                </Typography>
              }
              placement='top'
            >
              <InfoOutlined />
            </Tooltip>
          </Box>
          <Box sx={{ position: 'absolute', right: 0, top: 0 }}>
            <IconButton
              size='small'
              onClick={() => pauseAudio()}
              sx={{ borderTopLeftRadius: '0', borderBottomRightRadius: '0' }}
            >
              <Close />
            </IconButton>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {currentSong?.songLink ? (
                  <a
                    href={currentSong.songLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      textDecoration: 'none',
                      color: 'links',
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
                ) : (
                  <Typography
                    variant='h6'
                    sx={{
                      color: 'white',
                      fontSize: '1.0rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {currentSong?.songName}
                  </Typography>
                )}
                <Typography variant='subtitle1'>
                  {currentSong?.artist}
                </Typography>
              </Box>
            </Box>
            <LinearProgress variant='determinate' value={progress} />
            <audio ref={audioRef} preload='auto' />
          </Box>
        </Box>
      </Slide>
    </Box>
  );
}

export default MusicPlayer;
