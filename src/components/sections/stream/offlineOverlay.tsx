'use client';

import { Diamond, Today } from '@mui/icons-material';
import { Button, CircularProgress } from '@mui/material';

import Image from 'next/image';
import { useState } from 'react';

export default function OfflineOverlay({ scheduleImage, waitImage }) {
  const [scheduleState, setScheduleState] = useState({
    show: false,
    loading: false,
  });
  const [waitImageState, setWaitImageState] = useState({
    show: false,
    loading: false,
  });

  return (
    <>
      {/* Button for Schedule */}
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
          padding: '8px',
          borderRadius: '4px',
          color: 'black',
        }}
        onMouseEnter={() => setScheduleState({ show: true, loading: true })}
        onMouseLeave={() => setScheduleState({ show: false, loading: false })}
        onClick={() => {
          if (scheduleState.show && !scheduleState.loading) {
            setScheduleState({ show: false, loading: false });
          } else if (!scheduleState.show && !scheduleState.loading) {
            setScheduleState({ show: true, loading: true });
          }
        }}
      >
        Schedule
      </Button>

      {/* Button for While You Wait */}
      <Button
        variant='contained'
        color='primary'
        endIcon={
          waitImageState.loading ? <CircularProgress size={20} /> : <Diamond />
        }
        sx={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          padding: '8px',
          borderRadius: '4px',
          color: 'black',
        }}
        onMouseEnter={() => setWaitImageState({ show: true, loading: true })}
        onMouseLeave={() => setWaitImageState({ show: false, loading: false })}
        onClick={() => {
          if (waitImageState.show && !waitImageState.loading) {
            setWaitImageState({ show: false, loading: false });
          } else if (!waitImageState.show && !waitImageState.loading) {
            setWaitImageState({ show: true, loading: true });
          }
        }}
      >
        While You Wait
      </Button>

      {/* Image for Schedule */}
      {scheduleState.show && (
        <Image
          src={scheduleImage}
          alt='Schedule'
          width='1200'
          height='675'
          style={{
            position: 'absolute',
            top: '60px',
            right: '16px',
            width: '0',
            height: '0',
            transition: 'width 0.5s, height 0.5s',
          }}
          onLoad={(e) => {
            const targetElement = e.target as HTMLElement;
            targetElement.style.width = '80%';
            targetElement.style.height = '80%';
            setScheduleState({ show: true, loading: false });
          }}
        />
      )}

      {/* Image for While You Wait */}
      {waitImageState.show && (
        <Image
          src={waitImage}
          alt='While You Wait'
          // unoptimized // Somehow setting unoptimized causes the mouse enter/leave to ony function on every other hover (And prevents the onLoad from working more than once)
          width='540'
          height='360'
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '16px',
            width: '0',
            height: '0',
            transition: 'width 0.5s, height 0.5s',
          }}
          onLoad={(e) => {
            const targetElement = e.target as HTMLElement;
            targetElement.style.width = '80%';
            targetElement.style.height = '80%';
            setWaitImageState({ show: true, loading: false });
          }}
        />
      )}
    </>
  );
}
