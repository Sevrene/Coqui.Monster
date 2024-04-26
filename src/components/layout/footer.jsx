'use client';

import {
  Box,
  Button,
  IconButton,
  Link,
  Snackbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconCopy, IconMail } from '@tabler/icons-react';

import DevHandle from './devHandle';
import SocialIconStack from '../socailIconStack';
import { alpha } from '@mui/material';
import { footerBackground } from '@/mockData';
import { formatBackgroundStyle } from '@/utils/styleUtils';
import { socials } from '@/mockData';
import { useState } from 'react';

export function Footer() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component='footer'
      sx={{
        color: 'white',
        background: formatBackgroundStyle(footerBackground),
        padding: '8px 0',
        marginTop: '64px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '80%',
          justifyContent: 'space-between',
          margin: '0 auto',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: 'lg',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Socials
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <SocialIconStack
              socials={socials.filter((social) =>
                social.renderLocation.includes('Footer')
              )}
            />
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              display: 'inline-flex',
              fontSize: 'lg',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Contact
            <IconMail style={{ marginLeft: '6px' }} />
          </Typography>
          <Typography>
            <Tooltip title='Business Inquiries' arrow>
              <Button
                aria-label='Email coquiestions@gmail.com'
                component={Link}
                href={'mailto:coquiestions@gmail.com'}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': {
                    background: alpha('#948DE8', 0.25),
                  },
                }}
              >
                coquiestions@gmail.com
              </Button>
            </Tooltip>
            <Tooltip title='Copy to Clipboard' arrow>
              <IconButton
                aria-label='Copy contact email to clipboard'
                onClick={handleClick}
                sx={{
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <Snackbar
                  open={open}
                  autoHideDuration={1000}
                  onClose={handleClose}
                  message='Copied to clipboard!'
                />
                <IconCopy />
              </IconButton>
            </Tooltip>
          </Typography>
        </Box>
      </Box>
      <DevHandle />
    </Box>
  );
}
