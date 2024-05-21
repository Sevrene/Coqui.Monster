'use client';

import { Pause, PlayArrow } from '@mui/icons-material';

import { IconButton } from '@mui/material';
import { MusicPlayerContext } from '@/components/providers/musicPlayerCtxProvider';
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
    <IconButton onClick={handlePlay}>
      {isCurrentSong && playing ? <Pause /> : <PlayArrow />}{' '}
    </IconButton>
  );
}
