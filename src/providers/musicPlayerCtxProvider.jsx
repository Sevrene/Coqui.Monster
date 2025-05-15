'use client';

import { createContext, useState } from 'react';

export const MusicPlayerContext = createContext();

/**
 * Provides context for the music player.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactNode} The music player context provider.
 */
export const MusicPlayerCtxProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [playing, setPlaying] = useState(false);

  /**
   * Plays the audio.
   */
  const playAudio = () => {
    setPlaying(true);
  };

  /**
   * Pauses the audio.
   */
  const pauseAudio = () => {
    setPlaying(false);
  };

  /**
   * Switches the current song.
   * @param {Object} credit - The song credit.
   */
  const switchTrack = (credit) => {
    setCurrentSong(credit);
    playAudio();
  };

  return (
    <MusicPlayerContext.Provider
      value={{ playAudio, pauseAudio, switchTrack, currentSong, playing }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
