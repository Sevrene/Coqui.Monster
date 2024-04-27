'use client';

import { AppBar, Box, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import SocialIconStack from '../socailIconStack';
import { socials } from '@/mockData';

export function Header() {
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
    <AppBar
      sx={{
        elevation: '0',
        height: '64px',
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: isScrolled
            ? `linear-gradient(0deg, #6600CC 0%, #000000 100%)`
            : 'transparent',
          boxShadow: isScrolled ? 'initial' : 'none',
          transition: 'opacity 0.5s ease-in-out',
          opacity: isScrolled ? 1 : 0,
          zIndex: -1,
        }}
      />
      <Toolbar
        style={{
          maxWidth: '1920px',
        }}
      >
        <Box position='relative' width='114px' height='100%'>
          <Link href='/'>
            <Image
              src='/images/brand/signature.png'
              alt='Logo'
              width={114}
              height={64}
            />
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <SocialIconStack
            socials={socials.filter((social) =>
              social.renderLocation.includes('Header')
            )}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
