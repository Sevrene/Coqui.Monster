'use client';

import { useEffect, useState } from 'react';

import { Typography } from '@mui/material';

const messages = [
  'This is not the page you are looking for.',
  'Nothing to see here.',
  'Move along.',
  'You seem lost.',
];

export default function NotFound() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(`404: ${randomMessage}`);
  }, []);

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        marginTop: '64px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography style={{ fontSize: '3rem', textAlign: 'center' }}>
        {message}
      </Typography>
    </main>
  );
}
