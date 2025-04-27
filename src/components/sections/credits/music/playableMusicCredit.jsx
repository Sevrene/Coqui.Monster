'use client';

import { Pause, PlayArrow } from '@mui/icons-material';
import { IconButton, useMediaQuery } from '@mui/material';

import { MusicPlayerContext } from '@/providers/musicPlayerCtxProvider';
import { useContext } from 'react';

/**
 * Renders a playable music credit component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.credit - The music credit object.
 * @returns {JSX.Element} The playable music credit component.
 */
export default function PlayableMusicCredit({ credit }) {
  const { switchTrack, currentSong, playing, playAudio, pauseAudio } =
    useContext(MusicPlayerContext);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  /**
   * Handles the play button click event.
   */
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
    <IconButton onClick={handlePlay} disabled={isSmallScreen}>
      {isCurrentSong && playing ? <Pause /> : <PlayArrow />}{' '}
    </IconButton>
  );
}
