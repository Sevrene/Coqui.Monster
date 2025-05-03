import { Box, Button, Tooltip } from '@mui/material';

import type { ButtonProps } from '@mui/material';
import { DynamicIcon } from '@/utils/dynamicIcon';

interface LinkButtonProps {
  text: string;
  link: string;
  tooltip?: string;
  icon?: string;
  fullWidth?: boolean;
  gap?: string;
  buttonProps?: ButtonProps;
}

export default function LinkButton({
  text,
  link,
  tooltip,
  icon,
  fullWidth = false,
  gap = '16px',
  buttonProps,
}: LinkButtonProps) {
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

  return (
    <Tooltip title={tooltip} arrow placement='top'>
      <Button
        component='a'
        startIcon={<DynamicIcon name={icon} />}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        {...buttonProps}
        sx={{
          flexGrow: { xs: 0, md: 1 },
          flexBasis: fullWidth ? fullRowBasis : defaultBasis,
        }}
      >
        <Box
          component='span'
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {text}
        </Box>
      </Button>
    </Tooltip>
  );
}
