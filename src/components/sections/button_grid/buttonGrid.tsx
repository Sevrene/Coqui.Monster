import { Box, Stack, Typography } from '@mui/material';

import { Homepage } from '@/payload-types';
import LinkButton from './linkButton';

interface SupportButtonProps {
  title: string;
  buttonGroup: Homepage['supportButtons'];
}

export default function ButtonGrid({ title, buttonGroup }: SupportButtonProps) {
  // Items per row: xs: 1, sm: 2, md: 3
  const gap = '16px';
  const defaultBasis = {
    xs: `calc(100% / 1.33)`, // 1 item per row @ ~75% width
    sm: `calc(100% / 2 - (${gap}/2))`, // 2 items per row
    md: `calc(100% / 3 - (${gap}))`, // 3 items per row
  };
  // Define fullRowBasis for full-width buttons
  const fullRowBasis = {
    xs: defaultBasis.xs,
    sm: `100%`,
    md: `100%`,
  };

  if (!buttonGroup || buttonGroup.length === 0) {
    return null;
  }

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
        {title}
      </Typography>
      <Stack
        direction='row'
        spacing={gap}
        useFlexGap
        flexWrap='wrap'
        justifyContent={{ xs: 'center', sm: 'flex-start' }}
      >
        {buttonGroup?.map((button) => {
          const { id, label, tooltip, url, icon, fullWidth, ...buttonProps } =
            button;

          return (
            <LinkButton
              key={label}
              text={label}
              link={url}
              tooltip={tooltip}
              icon={icon}
              buttonProps={{
                ...buttonProps,
                sx: {
                  flexGrow: { xs: 0, md: 1 },
                  flexBasis: fullWidth ? fullRowBasis : defaultBasis,
                },
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
