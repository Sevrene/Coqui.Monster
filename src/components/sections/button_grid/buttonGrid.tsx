import { Box, Stack, Typography } from '@mui/material';

import { Homepage } from '@/payload-types';
import LinkButton from './linkButton';

interface SupportButtonProps {
  title: string;
  buttonGroup: Homepage['supportButtons'];
}

export default function ButtonGrid({ title, buttonGroup }: SupportButtonProps) {
  const gap = '16px';

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
              fullWidth={fullWidth}
              gap={gap}
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
