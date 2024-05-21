import { AppBar, Box, Toolbar } from '@mui/material';

import { AnnouncementBar } from './announcementBar';
import { HeaderScrollIn } from './headerScrollIn';
import Image from 'next/image';
import Link from 'next/link';
import SocialIconStack from '../socials/socailIconStack';
import { socials } from '@/mockData';

/**
 * Renders the header component.
 * @returns {JSX.Element} The header component.
 */
export function Header() {
  return (
    <AppBar
      sx={{
        elevation: '0',
        height: '64px',
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <AnnouncementBar />
      <Box>
        <HeaderScrollIn />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Toolbar
            style={{
              flexGrow: 1,
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
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <SocialIconStack
                socials={socials.filter((social) =>
                  social.renderLocation.includes('Header')
                )}
              />
            </Box>
          </Toolbar>
        </Box>
      </Box>
    </AppBar>
  );
}
