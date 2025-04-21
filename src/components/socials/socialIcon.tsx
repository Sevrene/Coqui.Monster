import { IconButton, Tooltip } from '@mui/material';

import { DynamicIcon } from '@/utils/dynamicIcon';

interface SocialIconProps {
  social: {
    name: string;
    url: string;
    appearance: {
      color: string;
      icon: string;
    };
  };
}

export default function SocialIcon({ social }: SocialIconProps) {
  return (
    <Tooltip title={social.name} key={social.name} placement='top'>
      <IconButton
        aria-label={social.name}
        href={social.url}
        target='_blank'
        rel='noopener noreferrer'
        sx={{
          color: social.appearance.color,
          '&:hover': {
            backgroundColor: `${social.appearance.color}35`,
            textDecoration: 'none',
          },
        }}
      >
        <DynamicIcon name={social.appearance.icon} />
      </IconButton>
    </Tooltip>
  );
}
