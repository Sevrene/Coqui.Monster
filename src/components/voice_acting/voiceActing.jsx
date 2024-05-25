import {
  Avatar,
  Box,
  Button,
  Grid,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';

import CreditsChip from '../credits/creditsChip';
import Image from 'next/image';
import { Mic } from '@mui/icons-material';
import { voiceActingRoles } from '@/mockData';

/**
 * Renders the VoiceActing component.
 * This component displays voice acting roles and a full portfolio link.
 * It also provides contact information for casting inquiries.
 *
 * @returns {JSX.Element} The VoiceActing component.
 */
export default function VoiceActing() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
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
        🔪🐸 VOICE ACTING 🐸🔪
      </Typography>
      <Grid container spacing={2} columns={2} maxWidth='80%'>
        {voiceActingRoles.map((role) => (
          <Tooltip
            key={role.title}
            title={<Typography>{role.title}</Typography>}
            arrow
            placement='top'
          >
            <Grid item xs={2} sm={1}>
              <CreditsChip link={role.link}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <ListItemAvatar>
                    {role.imageData && (
                      <Avatar
                        variant='rounded'
                        sx={{
                          background: 'transparent',
                        }}
                      >
                        <Image
                          src={role.imageData.src}
                          alt={role.title}
                          width='40'
                          height='40'
                        />
                      </Avatar>
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    primary={role.title}
                    secondary={role.role}
                    primaryTypographyProps={{
                      sx: {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      },
                    }}
                  />
                </Box>
              </CreditsChip>
            </Grid>
          </Tooltip>
        ))}
      </Grid>
      <Box sx={{ paddingTop: '16px' }}>
        <Typography
          variant='h5'
          sx={{
            '@media (max-width:400px)': {
              fontSize: '1.6rem',
            },
            margin: '16px 0',
          }}
        >
          FULL PORTFOLIO
        </Typography>
        <Button
          variant='contained'
          color='brandPurple'
          endIcon={<Mic />}
          href={
            'https://www.animenewsnetwork.com/encyclopedia/people.php?id=241362'
          }
          target='_blank'
          rel='noopener noreferrer'
        >
          Full Profile
        </Button>
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
        Interested in Casting?
      </Typography>
      <Typography variant='body1'>
        Contact{' '}
        <Box
          component='a'
          href='mailto:coquiestions@gmail.com'
          sx={{
            color: 'inherit',
          }}
        >
          Coqui
        </Box>{' '}
        at the business email below
      </Typography>
    </Box>
  );
}
