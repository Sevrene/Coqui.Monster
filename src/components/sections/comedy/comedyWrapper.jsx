'use client';

import { Snackbar } from '@mui/material';
import { useComedy } from './comedy';
import { useState } from 'react';

/**
 * Renders the ComedyWrapper component.
 * This component displays a Snackbar with a message when triggered.
 *
 * @returns {JSX.Element} The rendered ComedyWrapper component.
 */
export default function ComedyWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  const handleComedy = () => {
    document.body.style.cursor = `url("/images/comedy/comedy.png"), auto`;
    setIsOpen(true);
  };

  // Hello there! I see you're looking at my code.
  // I hope you're having a good day! 😄
  // Here's a little secret for you:
  useComedy('comedy', handleComedy);

  return (
    <>
      <Snackbar
        open={isOpen}
        message="It's Comedy!"
        autoHideDuration={3000}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}

// TODO: This entire setup feels a little hacky.
//  Should see if there's a better way to handle this.
//  (Can I hide the code somehow? Would need this to be a server component for that.)
//  Should see if I can get this working with a bunch of different codes.
