import { Brush, RecentActors } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  GridLegacy,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';

import { mainCredits } from '@/mockData';
import Image from 'next/image';
import DrawerToggleButton from '../drawerToggleButton';
import CreditDrawers from './creditDrawers';
import CreditsChip from './creditsChip';

/**
 * Renders the Credits component.
 * @returns {JSX.Element} The rendered Credits component.
 */
export default function Credits() {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
      >
        <Typography
          variant='h4'
          sx={{
            '@media (max-width:400px)': {
              fontSize: '1.6rem',
            },
            marginBottom: '12px',
          }}
        >
          🍮🐙 CREDITS 🍮🐙 [WIP SECTION]
        </Typography>
        <GridLegacy container spacing={2} columns={2} maxWidth='80%'>
          {mainCredits.map((credit) => (
            <GridLegacy item key={credit.title} xs={2} sm={1}>
              <CreditsChip link={credit.link}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <ListItemAvatar>
                    {credit.image && ( // TODO: Check if this needs the same sx as voiceActing.jsx
                      <Avatar>
                        <Image
                          src={credit.image}
                          alt={credit.title}
                          width='40'
                          height='40'
                        />
                      </Avatar>
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    primary={credit.title}
                    secondary={credit.body}
                  />
                  <Tooltip title={'Artist Socials'}>
                    <Button
                      color='link'
                      disabled={!credit.link}
                      endIcon={<RecentActors />}
                      sx={{
                        borderRadius: 2,
                      }}
                    >
                      {credit.link ? 'Artist' : 'No Artist Link'}
                    </Button>
                  </Tooltip>
                </Box>
              </CreditsChip>
            </GridLegacy>
          ))}
        </GridLegacy>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-evenly',
            width: '100%',
            paddingTop: '16px',
          }}
        >
          <Box>
            <Typography
              variant='h5'
              sx={{
                '@media (max-width:400px)': {
                  fontSize: '1.6rem',
                },
                margin: '16px 0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              MISC CREDITS
            </Typography>
            <DrawerToggleButton
              toggleName='misc'
              variant='contained'
              color='primary'
              target='_blank'
              rel='noopener noreferrer'
              endIcon={<Brush />}
            >
              Open Full List
            </DrawerToggleButton>
          </Box>
        </Box>
        <Typography
          variant='h5'
          sx={{
            '@media (max-width:400px)': {
              fontSize: '1.6rem',
            },
            marginTop: '64px',
          }}
        >
          Credits Missing?
        </Typography>
        <Typography variant='body1'>
          Contact{' '}
          <Box
            component='a'
            href='https://discord.com/users/167827741360652290'
            sx={{
              color: 'inherit',
            }}
          >
            Sevrene
          </Box>{' '}
          or Berry with details
        </Typography>
      </Box>
      <CreditDrawers />
    </>
  );
}
