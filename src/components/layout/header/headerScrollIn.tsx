'use client';

import { JSX, useEffect, useState } from 'react';

import { Box } from '@mui/material';

interface HeaderScrollInProps {
  background: string;
}

export default function HeaderScrollIn({
  background,
}: HeaderScrollInProps): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const checkScroll = (): void => {
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
        background: isScrolled ? background : 'transparent',
        boxShadow: isScrolled ? '0px 5px 15px #000000' : 'none',
        transition: 'opacity 0.5s ease-in-out',
        opacity: isScrolled ? 1 : 0,
      }}
    />
  );
}
