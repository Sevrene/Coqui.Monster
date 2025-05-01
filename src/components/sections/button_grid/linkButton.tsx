import { Box, Button, Tooltip } from '@mui/material';

import type { ButtonProps } from '@mui/material';
import { DynamicIcon } from '@/utils/dynamicIcon';

interface LinkButtonProps {
  text: string;
  link: string;
  tooltip?: string;
  icon?: string;
  fullWidth?: boolean;
  buttonProps?: ButtonProps;
}

export default function LinkButton({
  text,
  link,
  tooltip,
  icon,
  buttonProps,
}: LinkButtonProps) {
  return (
    <Tooltip title={tooltip} arrow placement='top'>
      <Button
        component='a'
        {...buttonProps}
        startIcon={<DynamicIcon name={icon} />}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
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
