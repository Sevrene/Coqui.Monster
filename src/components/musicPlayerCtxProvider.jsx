'use client';

import { createContext, useState } from 'react';

export const MusicPlayerContext = createContext();

export const MusicPlayerCtxProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [playing, setPlaying] = useState(false);

  const playAudio = () => {
    setPlaying(true);
  };

  const pauseAudio = () => {
    setPlaying(false);
  };

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
