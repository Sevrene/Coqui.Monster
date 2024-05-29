'use client';

import { Box } from '@mui/material';
import OfflineOverlay from './offlineOverlay';
import Script from 'next/script';
import { useState } from 'react';

export default function StreamViewer() {
  const [isLive, setIsLive] = useState(null);
  const channelName = 'coqui';

  const loadTwitchPlayer = () => {
    if (window.Twitch && window.Twitch.Player) {
      const player = new window.Twitch.Player('twitch-player', {
        width: '100%',
        height: '100%',
        channel: channelName,
        layout: 'video',
        muted: true,
        parent: ['coqui.monster'],
      });

      setIsLive(!player.getEnded());
    }
  };

  return (
    <>
      <Script
        src='https://player.twitch.tv/js/embed/v1.js'
        onReady={loadTwitchPlayer}
      />
      <Box style={{ position: 'relative', paddingBottom: '56.25%' }}>
        <Box
          id='twitch-player'
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        ></Box>
        {/* Strict Equality to only render when explicitly false (instead of null or undefined) */}
        {isLive === false && <OfflineOverlay />}
      </Box>
    </>
  );
}
