import { Typography } from '@mui/material';
import { ReactNode } from 'react';

// NOTE: Currently broken.
// Next expects a 404 page to be in the app directory, but that loses (main) layout
// Currently unable to figure out how to
//  - Get the (main) layout to apply to this page
//  - Have the page display correctly, and
//  - Properly label itself as a 404 page

const messages = [
  '404: Page not found',
  "Hint: I hear 'comedy' is pretty funny",
  <>
    You found Tad&apos;s Secret Stash!
    <br />
    Unfortunately he doesn&apos;t own a stash yet
  </>,
  'You seem more lost than Coqui in a hallway',
];

export default function NotFound(): ReactNode {
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
      <Typography
        sx={{
          maxWidth: { xs: '90%', md: '80%', lg: '900px' },
          fontSize: { xs: '1rem', sm: '2rem', lg: '3rem' },
          textAlign: 'center',
          color: 'white',
        }}
      >
        {messages[Math.floor(Math.random() * messages.length)]}
      </Typography>
    </main>
  );
}
