'use client';

import { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import OfflineOverlay from './offlineOverlay';
import Script from 'next/script';

const channelName = 'coqui';

/**
 * Renders the Twitch stream viewer component.
 * @returns {JSX.Element} The rendered Twitch stream viewer component.
 */
export default function StreamViewer() {
  const [isLive, setIsLive] = useState(null);

  /**
   * Loads the Twitch player and sets up event listeners for online and offline events.
   */
  const loadTwitchPlayer = () => {
    var player;

    if (window.Twitch && window.Twitch.Player) {
      player = new window.Twitch.Player('twitch-player', {
        width: '100%',
        height: '100%',
        channel: channelName,
        layout: 'video',
        muted: true,
        parent: ['coqui.monster'],
      });
    }

    player.addEventListener(window.Twitch.Player.ONLINE, () => {
      setIsLive(true);
    });

    player.addEventListener(window.Twitch.Player.OFFLINE, () => {
      setIsLive(false);
    });

    return () => {
      player.removeEventListener(window.Twitch.Player.ONLINE);
      player.removeEventListener(window.Twitch.Player.OFFLINE);
    };
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
