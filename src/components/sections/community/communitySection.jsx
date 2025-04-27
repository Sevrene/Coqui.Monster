import { Box, Stack, Typography } from '@mui/material';

import { communitySection } from '@/mockData';
import SupportButton from '../support/supportButton';

/**
 * Renders the CommunitySection component.
 * @returns {JSX.Element} The rendered CommunitySection component.
 */
export default function CommunitySection() {
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
        Community
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
        {communitySection.map((communityItem) => {
          const { text, link, tooltip, icon, fullWidth, buttonProps } =
            communityItem;
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
