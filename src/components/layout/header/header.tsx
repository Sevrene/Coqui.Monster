import { ParsedHeaderData, getHeaderData } from '@/cms_data/headerData';
import { AppBar, Box, Toolbar } from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import FreeCWordPass from '../../custom/freeCWordPass';
import SocialIconStack from '../../sections/socials/socailIconStack';
import AnnouncementBar from './announcementBar';
import HeaderScrollIn from './headerScrollIn';

export async function Header(): Promise<ReactNode> {
  const headerData: ParsedHeaderData = await getHeaderData();

  const { announcement, fadeIn, logo, headerMode, background, socials } =
    headerData;

  return (
    <AppBar
      sx={{
        position: headerMode,
        elevation: '0',
        background: fadeIn ? 'none' : background,
        boxShadow: 'none',
      }}
    >
      <AnnouncementBar announcement={announcement} />
      {fadeIn ? (
        <HeaderScrollIn background={background} />
      ) : (
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            boxShadow:
              background == 'transparent' ? '' : '0px 5px 15px #000000',
          }}
        />
      )}
      <FreeCWordPass />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '64px',
        }}
      >
        <Toolbar
          style={{
            flexGrow: 1,
            maxWidth: '1920px',
          }}
        >
          <Box position='relative' width='114px' height='100%'>
            {logo && (
              <Link href='/'>
                <Image
                  src={logo.url}
                  alt={logo.alt}
                  width={Math.max(logo.width, 114)}
                  height={Math.max(logo.height, 64)}
                  style={{ width: 'auto', height: '100%' }}
                />
              </Link>
            )}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <SocialIconStack socials={socials} />
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
