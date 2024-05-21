'use client';

import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

/**
 * Renders a the background of the header that fades in and changes background color
 * when the user scrolls down the page.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export function HeaderScrollIn() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    if (window.scrollY === 0) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: isScrolled
          ? `linear-gradient(0deg, #6600CC 0%, #000000 100%)`
          : 'transparent',
        boxShadow: isScrolled ? '0px 5px 15px #000000' : 'none',
        transition: 'opacity 0.5s ease-in-out',
        opacity: isScrolled ? 1 : 0,
        zIndex: -1,
      }}
    />
  );
}
