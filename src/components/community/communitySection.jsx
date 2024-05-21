import { Box, Stack, Typography } from '@mui/material';

import SupportButton from '../support/supportButton';
import { communitySection } from '@/mockData';

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
            flexBasis: { xs: 'calc(100% / 2)', md: 'calc(100% / 4)' },
          },
        }}
      >
        {communitySection.map((communityItem) => {
          const { text, link, tooltip, icon, buttonProps } = communityItem;
          return (
            <SupportButton
              key={text}
              text={text}
              link={link}
              tooltip={tooltip}
              icon={icon}
              buttonProps={{
                ...buttonProps,
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
