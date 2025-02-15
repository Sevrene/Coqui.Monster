import { Box, Stack, Typography } from '@mui/material';

import { supportSection } from '@/mockData';
import SupportButton from './supportButton';

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
      <Stack
        direction='row'
        spacing={2}
        useFlexGap
        flexWrap='wrap'
        justifyContent='center'
        sx={{
          '& > *': {
            flexBasis: {
              xs: 'calc(100% / 1.5)',
              sm: 'calc(100% / 2.5)',
              md: 'calc(100% / 3.5)',
            },
          },
        }}
      >
        {supportSection.map((support) => {
          const { text, link, tooltip, icon, fullWidth, buttonProps } = support;
          return (
            <SupportButton
              key={text}
              text={text}
              link={link}
              tooltip={tooltip}
              icon={icon}
              buttonProps={{
                ...buttonProps,
                sx: {
                  flexGrow: { xs: 0, md: 1 },
                  flexBasis: fullWidth ? '100%' : 'default',
                },
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
