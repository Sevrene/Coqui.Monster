import { IconButton, Tooltip } from '@mui/material';

import { DynamicIcon } from '@/utils/dynamicIcon';
import { JSX } from 'react';

interface SocialIconProps {
  social: {
    name: string;
    url: string;
    appearance: {
      color: string;
      icon: JSX.Element | string;
    };
  };
  asLink?: boolean;
}

export default function SocialIcon({ social, asLink = true }: SocialIconProps) {
  return (
    <Tooltip title={social.name} key={social.name} placement='top'>
      <IconButton
        aria-label={social.name}
        href={asLink ? social.url : undefined}
        target={asLink ? '_blank' : undefined}
        rel={asLink ? 'noopener noreferrer' : undefined}
        sx={{
          color: social.appearance.color,
          '&:hover': {
            backgroundColor: `${social.appearance.color}35`,
            textDecoration: 'none',
          },
        }}
      >
        {typeof social.appearance.icon === 'string' ? (
          <DynamicIcon name={social.appearance.icon} />
        ) : (
          social.appearance.icon
        )}
      </IconButton>
    </Tooltip>
  );
}
