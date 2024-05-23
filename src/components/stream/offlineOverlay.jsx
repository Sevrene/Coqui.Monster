'use client';

import { Button, CircularProgress } from '@mui/material';
import { Diamond, Today } from '@mui/icons-material';
import { useEffect, useState } from 'react';

import Image from 'next/image';

/**
 * Renders the OfflineOverlay component.
 * This component displays buttons and images when the liveStatus is false.
 * @returns {JSX.Element} The OfflineOverlay component.
 */
export default function OfflineOverlay() {
  const [liveStatus, setLiveStatus] = useState(null);
  const [scheduleState, setScheduleState] = useState({
    show: false,
    loading: false,
  });
  const [waitImageState, setWaitImageState] = useState({
    show: false,
    loading: false,
  });

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

  if (liveStatus === null || liveStatus) {
    return null;
  } else {
    return (
      <>
        {/* Button for Twitter Schedule */}
        <Button
          variant='contained'
          color='primary'
          endIcon={
            scheduleState.loading ? <CircularProgress size={20} /> : <Today />
          }
          sx={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: 'white',
            padding: '8px',
            borderRadius: '4px',
            color: 'black',
          }}
          onMouseEnter={() => setScheduleState({ show: true, loading: true })}
          onMouseLeave={() => setScheduleState({ show: false })}
          onClick={() =>
            setScheduleState((prevState) => ({
              show: !prevState.show,
              loading: !prevState.loading,
            }))
          }
        >
          Twitter Schedule
        </Button>

        {/* Button for While You Wait */}
        <Button
          variant='contained'
          color='primary'
          endIcon={
            waitImageState.loading ? (
              <CircularProgress size={20} />
            ) : (
              <Diamond />
            )
          }
          sx={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            color: 'white',
            padding: '8px',
            borderRadius: '4px',
            color: 'black',
          }}
          onMouseEnter={() => setWaitImageState({ show: true, loading: true })}
          onMouseLeave={() => setWaitImageState({ show: false })}
          onClick={() =>
            setWaitImageState((prevState) => ({
              show: !prevState.show,
              loading: !prevState.loading,
            }))
          }
        >
          While You Wait
        </Button>

        {/* Image for Twitter Schedule */}
        {scheduleState.show && (
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
              setScheduleState({ show: true, loading: false });
            }}
          />
        )}

        {/* Image for While You Wait */}
        {waitImageState.show && (
          <Image
            src='/gifs/supercracksmaller.gif'
            alt='While You Wait'
            // unoptimized // Somehow setting unoptimized causes the mouse enter/leave to ony function on every other hover (And prevents the onLoad from working more than once)
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
              setWaitImageState({ show: true, loading: false });
            }}
          />
        )}
      </>
    );
  }
}
