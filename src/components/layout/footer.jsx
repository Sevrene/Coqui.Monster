'use client';

import {
  Box,
  Button,
  IconButton,
  Link,
  Snackbar,
  Tooltip,
} from '@mui/material';
import {
  IconBrandDiscord,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandYoutube,
  IconCopy,
  IconMail,
} from '@tabler/icons-react';
import builder, { BuilderComponent } from '@builder.io/react';
import { useEffect, useState } from 'react';

import DevHandle from './devHandle';
import { SvgIcon } from '@mui/material';
import { ReactComponent as ThreeAMLogo } from '../../3amLogo.svg';
import { alpha } from '@mui/material';

// TODO: Move this to builder config
// TODO: See if I can dynamically import icons chosen in builder
// TODO: Split Links out into its own Icon Button Group component
// TODO: Split the contact section out into its own component
const links = [
  {
    name: 'Twitch',
    url: 'https://www.twitch.tv/coqui',
    icon: <IconBrandTwitch />,
    iconColor: '#9147FF',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/c0qui',
    icon: <IconBrandTwitter />,
    iconColor: '#1DA1F2',
  },
  {
    name: 'Discord',
    url: 'https://discord.com/invite/TheSouthSide',
    icon: <IconBrandDiscord />,
    iconColor: '#7289DA',
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/rummyandcoqui',
    icon: <IconBrandYoutube />,
    iconColor: '#FF0000',
  },
  {
    name: '3AM',
    url: 'https://www.3am.moe',
    icon: <SvgIcon component={ThreeAMLogo} viewBox='0 0 350 350' />,
    iconColor: '#948DE8',
  },
];

const Footer = (props) => {
  const [modelData, setModelData] = useState(null);
  const [open, setOpen] = useState(false);

  // Fetch data from Builder.io when the component mounts
  useEffect(() => {
    builder
      .get('footer')
      .promise()
      .then(({ data }) => {
        setModelData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('coquiestions@gmail.com');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component='footer'
      sx={{
        width: '100%',
        position: 'relative',
        background: 'transparent',
        color: 'white',
        py: '1rem',
      }}
    >
      <DevHandle />
      <BuilderComponent model='footer' />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '80%',
          mx: 'auto',
          flexDirection: 'row',
        }}
      >
        {modelData?.links?.showSection && (
          <Box sx={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: 'large',
                fontWeight: 'bold',
                marginBottom: '8px',
              }}
            >
              Links
            </div>
            {links.map((link) => (
              <Tooltip title={link.name} key={link.name} placement='top'>
                <IconButton
                  aria-label={link.name}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  sx={{
                    color: link.iconColor,
                    '&:hover': {
                      backgroundColor: alpha(link.iconColor, 0.15),
                      textDecoration: 'none',
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        )}
        {modelData?.contact?.showSection && (<Box sx={{ textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              fontSize: 'large',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Contact
            <IconMail style={{ marginLeft: '6px' }} />
          </div>
          <div pos='relative' style={{ whiteSpace: 'nowrap' }}>
            <Tooltip title='Business Inquiries' arrow>
              <Button
                aria-label='Email coquiestions@gmail.com'
                component={Link}
                href={modelData?.contact?.email}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': {
                    background: alpha('#948DE8', 0.25),
                  },
                }}
              >
                {modelData?.contact?.text}
              </Button>
            </Tooltip>
            <Tooltip title='Copy to Clipboard'>
              <IconButton
                aria-label='Copy contact email to clipboard'
                sx={{
                  color: 'white',
                }}
                onClick={handleCopy}
              >
                <IconCopy />
              </IconButton>
            </Tooltip>
            <Snackbar
              open={open}
              onClose={handleClose}
              message='Copied to clipboard!'
              autoHideDuration={1000}
            />
          </div>
        </Box>
        )}
      </Box>
    </Box>
  );
};

export default Footer;
