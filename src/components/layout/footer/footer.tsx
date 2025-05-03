import {
  Box,
  Button,
  Divider,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconCopy, IconMail } from '@tabler/icons-react';
import { ParsedFooterData, getFooterData } from '@/cms_data/footerData';

import { CopyButton } from '../../sections/socials/copyButton';
import DevHandle from './devHandle';
import { JSX } from 'react';
import { Redirect } from '@/payload-types';
import RedirectsFab from '@/components/sections/redirects/redirectsFab';
import SocialIconStack from '../../sections/socials/socailIconStack';
import { constStyles } from '@/styles/constStyles';
import redirects from '@/../redirects/redirects';

export async function Footer({
  hideRedirectsFab = false,
}: {
  hideRedirectsFab?: boolean;
} = {}): Promise<JSX.Element> {
  const footerData: ParsedFooterData =
    (await getFooterData()) as ParsedFooterData;
  const { background, socials, socialsSecondary, contact, devHandle } =
    footerData;
  const redirectsData = (await redirects()) as Redirect[];

  return (
    <Box
      component='footer'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        background: background,
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
            {socials?.length !== 0 ||
              (socialsSecondary?.length !== 0 && (
                <>
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
                    <SocialIconStack socials={socials} />
                    <Divider
                      orientation='vertical'
                      variant='middle'
                      flexItem
                      sx={{ borderWidth: '1px', borderColor: 'black' }}
                    />
                    <SocialIconStack socials={socialsSecondary} />
                  </Box>
                </>
              ))}
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            {contact && (
              <>
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
                      aria-label={`Email ${contact}`}
                      component={Link}
                      href={`mailto:${contact}`}
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        '&:hover': {
                          background: `${constStyles.brandAccent}50`,
                        },
                      }}
                    >
                      {contact}
                    </Button>
                  </Tooltip>
                  <Tooltip title='Copy to Clipboard' arrow placement='top'>
                    <span>
                      <CopyButton icon={<IconCopy />} copyText={contact} />
                    </span>
                  </Tooltip>
                </Typography>
              </>
            )}
          </Box>
        </Stack>
        <DevHandle devHandle={devHandle} />
        {!hideRedirectsFab && redirectsData?.length !== 0 && (
          <RedirectsFab redirects={redirectsData} />
        )}
      </Box>
    </Box>
  );
}
