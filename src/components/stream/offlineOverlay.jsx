'use client';

import { Diamond, Today } from '@mui/icons-material';
import { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import Image from 'next/image';

/**
 * Renders the OfflineOverlay component.
 * This component displays buttons and images when the liveStatus is false.
 * @returns {JSX.Element} The OfflineOverlay component.
 */
export default function OfflineOverlay() {
  const [liveStatus, setLiveStatus] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showWaitImage, setShowWaitImage] = useState(false);

  /**
   * Fetches the live status from the server and updates the liveStatus state.
   * @returns {Promise<void>}
   */
  const checkLiveStatus = async () => {
    const res = await fetch('/api/live-status');
    const data = await res.json();
    setLiveStatus(data.live);
  };

  useEffect(() => {
    checkLiveStatus();
  }, []);

  if (liveStatus) {
    return null;
  } else {
    return (
      <>
        {/* Button for Twitter Schedule */}
        <Button
          variant='contained'
          color='primary'
          endIcon={<Today />}
          sx={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: 'white',
            padding: '8px',
            borderRadius: '4px',
            color: 'black',
          }}
          onMouseEnter={() => setShowSchedule(true)}
          onMouseLeave={() => setShowSchedule(false)}
          onClick={() => setShowSchedule(!showSchedule)}
        >
          Twitter Schedule
        </Button>

        {/* Button for While You Wait */}
        <Button
          variant='contained'
          color='primary'
          endIcon={<Diamond />}
          sx={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            color: 'white',
            padding: '8px',
            borderRadius: '4px',
            color: 'black',
          }}
          onMouseEnter={() => setShowWaitImage(true)}
          onMouseLeave={() => setShowWaitImage(false)}
          onClick={() => setShowWaitImage(!showSchedule)}
        >
          While You Wait
        </Button>

        {/* Image for Twitter Schedule */}
        {showSchedule && (
          <Image
            src='/images/twitter_schedule.jpg'
            alt='Twitter Schedule'
            width='1920'
            height='1080'
            style={{
              position: 'absolute',
              top: '60px',
              right: '16px',
              width: '0',
              height: '0',
              transition: 'width 0.5s, height 0.5s',
            }}
            onLoad={(e) => {
              e.target.style.width = '80%';
              e.target.style.height = '80%';
            }}
          />
        )}

        {/* Image for While You Wait */}
        {showWaitImage && (
          <Image
            src='/gifs/supercracksmaller.gif'
            alt='Twitter Schedule'
            unoptimized
            width='1920'
            height='1080'
            style={{
              position: 'absolute',
              bottom: '60px',
              left: '16px',
              width: '0',
              height: '0',
              transition: 'width 0.5s, height 0.5s',
            }}
            onLoad={(e) => {
              e.target.style.width = '80%';
              e.target.style.height = '80%';
            }}
          />
        )}
      </>
    );
  }
}
