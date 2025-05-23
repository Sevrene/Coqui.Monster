'use client';

import { useRef, useState } from 'react';

import { Box } from '@mui/material';
import NoStreamCard from './noStreamCard';
import OfflineOverlay from './offlineOverlay';
import { useTwitchPlayer } from '@/components/hooks/useTwitchPlayer';

interface TwitchPlayerClientProps {
  channel: string;
  scheduleImage: {
    url: string;
    width: number;
    height: number;
  };
  extraImage: {
    url: string;
    width: number;
    height: number;
  };
}

const PLAYER_ID = 'twitch-player';

export default function StreamViewerClient({
  channel,
  scheduleImage,
  extraImage,
}: TwitchPlayerClientProps) {
  const playerRef = useRef(null);
  const playerInitializedRef = useRef(null);
  const [isLive, setIsLive] = useState(null);
  const [isTooSmall, setIsTooSmall] = useState(null);

  if (!channel) {
    return null;
  }

  useTwitchPlayer({
    channel,
    setIsLive,
    setIsTooSmall,
    playerRef,
    playerInitializedRef,
    playerId: PLAYER_ID,
  });

  return (
    <>
      <Box
        id={PLAYER_ID}
        ref={playerRef}
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
        }}
      >
        {isTooSmall && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <NoStreamCard channel={channel} />
          </Box>
        )}
      </Box>
      {/* Render offline overlay when explicitly offline */}
      {(isLive === false || isTooSmall) && (
        <OfflineOverlay
          scheduleImage={scheduleImage}
          waitImage={!isTooSmall ? extraImage : undefined}
        />
      )}
    </>
  );
}
