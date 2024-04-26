import { Box, Grid, Typography } from '@mui/material';

import SupportButton from './supportButton';
import { supportSection } from '@/mockData';

/**
 * Renders the SupportSection component.
 * @returns {JSX.Element} The rendered SupportSection component.
 */
export default function SupportSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: { xs: '60%', sm: '80%', md: '100%' },
      }}
    >
      <Typography
        variant='h4'
        sx={{
          marginBottom: '12px',
        }}
      >
        Support Coqui
      </Typography>
      <Grid
        container
        columns='2'
        spacing={2}
        sx={{ justifyContent: 'space-around' }}
      >
        {supportSection.map((support) => {
          const { text, link, tooltip, icon, buttonProps } = support;
          return (
            <Grid key={text} item xs='2' sm='1'>
              <Box
                sx={{
                  display: 'flex',
                  whiteSpace: 'nowrap',
                }}
              >
                <SupportButton
                  text={text}
                  link={link}
                  tooltip={tooltip}
                  icon={icon}
                  buttonProps={{
                    ...buttonProps,
                    style: { flexGrow: '1' },
                  }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
