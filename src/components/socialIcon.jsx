import { IconButton, Tooltip, alpha } from '@mui/material';

export default function SocialIcon({ social }) {
  return (
    <Tooltip title={social.name} key={social.name} placement='top'>
      <IconButton
        aria-label={social.name}
        href={social.url}
        target='_blank'
        rel='noopener noreferrer'
        sx={{
          color: social.iconColor,
          '&:hover': {
            backgroundColor: alpha(social.iconColor, 0.35),
            textDecoration: 'none',
          },
        }}
      >
        {social.icon}
      </IconButton>
    </Tooltip>
  );
}
