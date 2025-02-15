import { footerBackground, socials } from '@/mockData';
import {
  Box,
  Button,
  Chip,
  Divider,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconCopy, IconMail } from '@tabler/icons-react';

import { constStyles } from '@/styles/constStyles';
import { formatBackgroundStyle } from '@/utils/styleUtils';
import { InfoOutlined } from '@mui/icons-material';
import { CopyButton } from '../socials/copyButton';
import SocialIconStack from '../socials/socailIconStack';
import DevHandle from './devHandle';

/**
 * Renders the footer component.
 * @returns {JSX.Element} The rendered footer component.
 */
export function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        background: formatBackgroundStyle(footerBackground),
        padding: '8px 0',
        marginTop: '64px',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: '1920px',
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 0 }}
          sx={{
            justifyContent: 'space-evenly',
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
                  social.renderLocation.includes('FooterPrimary')
                )}
              />
              <Divider
                orientation='vertical'
                variant='middle'
                flexItem
                sx={{ borderWidth: '1px', borderColor: 'black' }}
              />
              <SocialIconStack
                socials={socials.filter((social) =>
                  social.renderLocation.includes('FooterSecondary')
                )}
              />
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontSize: 'lg',
                fontWeight: 'bold',
                marginBottom: '8px',
              }}
            >
              Experimental{' '}
              <Tooltip
                title={
                  <Typography variant='body2'>
                    These features are experimental and may not work as intended
                    and may be removed at any time
                  </Typography>
                }
                placement='top'
              >
                <InfoOutlined fontSize='small' />
              </Tooltip>
            </Typography>
            <Stack
              direction='row'
              spacing={1}
              flexWrap='wrap'
              useFlexGap
              sx={{
                justifyContent: 'center',
              }}
            >
              <Tooltip
                title={
                  <Typography variant='body2'>
                    Preview listen to music from the music credits tab.
                    Currently unavailable on mobile.
                  </Typography>
                }
                arrow
              >
                <Chip label='Music Player' />
              </Tooltip>
              <Tooltip
                title={
                  <Typography variant='body2'>
                    Certain key sequences can be pressed to access hidden
                    features
                  </Typography>
                }
                arrow
              >
                <Chip label='Hidden Comedy' />
              </Tooltip>
              <Tooltip
                title={
                  <Typography variant='body2'>
                    Not all features are properly reflected for mobile users.
                    Notably most experimental features and tooltips being
                    difficult for mobile users to access.
                  </Typography>
                }
                arrow
              >
                <Chip label='Mobile' />
              </Tooltip>
              <Tooltip
                title={
                  <Typography variant='body2'>
                    Misc credits will be further improved in the future to
                    provide more information.
                  </Typography>
                }
                arrow
              >
                <Chip label='Misc Credits' />
              </Tooltip>
            </Stack>
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
            <Typography sx={{ whiteSpace: 'nowrap' }}>
              <Tooltip title='Business Inquiries' arrow>
                <Button
                  aria-label='Email coquiestions@gmail.com'
                  component={Link}
                  href={'mailto:coquiestions@gmail.com'}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                      background: `${constStyles.brandAccent}50`,
                    },
                  }}
                >
                  coquiestions@gmail.com
                </Button>
              </Tooltip>
              <Tooltip title='Copy to Clipboard' arrow placement='top'>
                {' ' /* Workaround for tooltip not showing */}
                <CopyButton icon={<IconCopy />} />
              </Tooltip>
            </Typography>
          </Box>
        </Stack>
        <DevHandle />
      </Box>
    </Box>
  );
}
