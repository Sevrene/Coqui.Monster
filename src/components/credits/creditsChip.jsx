import { Chip } from '@mui/material';

/**
 * Renders a CreditsChip component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.link - The link to navigate to when the chip is clicked.
 * @param {React.Component} props.LabelComponent - The component to render as the label for the chip.
 * @returns {React.Component} The rendered CreditsChip component.
 */
export default function CreditsChip({ link, children }) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      style={{ width: '100%' }}
    >
      <Chip
        sx={{
          height: '56px', // TODO: This magic number is kind of janky. Setting to auto causes layout shift issues on hover though. Should see if I can get this to grow height in place instead of shifting everything down.
          width: '100%',
          '& .MuiChip-label': {
            width: { xs: '100%', xl: '75%' },
          },
          '&:hover .MuiListItemText-primary': {
            whiteSpace: 'normal',
          },
        }}
        clickable
        label={children}
      />
    </a>
  );
}
