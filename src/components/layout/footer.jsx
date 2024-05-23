import {
  Box,
  Button,
  Chip,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconCopy, IconMail } from '@tabler/icons-react';

import { CopyButton } from '../socials/copyButton';
import DevHandle from './devHandle';
import { InfoOutlined } from '@mui/icons-material';
import SocialIconStack from '../socials/socailIconStack';
import { constStyles } from '@/styles/constStyles';
import { footerBackground } from '@/mockData';
import { formatBackgroundStyle } from '@/utils/styleUtils';
import { socials } from '@/mockData';

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
                  social.renderLocation.includes('Footer')
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
                    Some text may be too long to fit where it is displayed on
                    certain devices. This should be covered by hover effects,
                    but may not be perfect. Please report any issues!
                  </Typography>
                }
                arrow
              >
                <Chip label='Long Text' />
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
                    Preview listen to music from the music credits tab
                  </Typography>
                }
                arrow
              >
                <Chip label='Music Player' />
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
