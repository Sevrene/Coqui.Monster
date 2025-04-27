'use client';

import { Box } from '@mui/material';
import Script from 'next/script';
import { useState } from 'react';
import OfflineOverlay from './offlineOverlay';

interface TwitchPlayerProps {
  channel: string;
  scheduleImage: string;
  extraImage: string;
}

interface TwitchPlayerOptions {
  width?: string | number;
  height?: string | number;
  channel?: string;
  layout?: string;
  muted?: boolean;
  parent?: string[];
}

interface TwitchPlayer {
  play(): void;
  pause(): void;
  setChannel(channel: string): void;
  getChannel(): string;
  setMuted(muted: boolean): void;
  isMuted(): boolean;
  addEventListener(event: string, callback: () => void): void;
  removeEventListener(event: string): void;
}

interface TwitchEmbed {
  Player: {
    ONLINE: string;
    OFFLINE: string;
    new (elementId: string, options: TwitchPlayerOptions): TwitchPlayer;
  };
}

declare global {
  interface Window {
    Twitch?: TwitchEmbed;
  }
}

export default function StreamViewer({
  channel,
  scheduleImage,
  extraImage,
}: TwitchPlayerProps) {
  const [isLive, setIsLive] = useState(null);

  /**
   * Loads the Twitch player and sets up event listeners for online and offline events.
   */
  const loadTwitchPlayer = () => {
    const hostname = new URL(process.env.NEXT_PUBLIC_BASE_URL as string)
      .hostname;
    var player: TwitchPlayer;

    if (window.Twitch && window.Twitch.Player) {
      player = new window.Twitch.Player('twitch-player', {
        width: '100%',
        height: '100%',
        channel: channel,
        layout: 'video',
        muted: true,
        parent: [hostname],
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
        />
        {/* Strict Equality to only render when explicitly false (instead of null or undefined) */}
        {isLive === false && (
          <OfflineOverlay
            scheduleImage={scheduleImage}
            waitImage={extraImage}
          />
        )}
      </Box>
    </>
  );
}
