'use client';

import { Box } from '@mui/material';
import OfflineOverlay from './offlineOverlay';
import Script from 'next/script';
import { useState } from 'react';

/**
 * Renders the Twitch stream viewer component.
 * @returns {JSX.Element} The rendered Twitch stream viewer component.
 */
export default function StreamViewer() {
  const [isLive, setIsLive] = useState(null);
  const channelName = 'coqui';

  /**
   * Loads the Twitch player and sets the live status.
   *
   * NOTE: May want to consider adding listeners for the player to update in real-time, but for now this is sufficient.
   */
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

      // Duration is either null (live) or a number (VOD) or 0 (offline)
      // This is mostly a workaround to check if the stream is live without the need for the Twitch API
      // However, the Twitch API requires client IDs, OAuth tokens, webhooks, and api calls to get the stream status, which is a bit much for this simple use case
      // If further information ends up being needed at some point the Twitch API can be reimplemented here
      setIsLive(player.getDuration() === null);
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
