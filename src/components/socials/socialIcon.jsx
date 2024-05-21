import { IconButton, Tooltip } from '@mui/material';

/**
 * Renders a social icon with a tooltip.
 * @param {Object} props - The component props.
 * @param {Object} props.social - The social object containing information about the social icon.
 * @param {string} props.social.name - The name of the social icon.
 * @param {string} props.social.url - The URL associated with the social icon.
 * @param {string} props.social.iconColor - The color of the social icon.
 * @param {ReactNode} props.social.icon - The icon component to be rendered.
 * @returns {JSX.Element} The rendered social icon component.
 */
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
            backgroundColor: `${social.iconColor}35`,
            textDecoration: 'none',
          },
        }}
      >
        {social.icon}
      </IconButton>
    </Tooltip>
  );
}
