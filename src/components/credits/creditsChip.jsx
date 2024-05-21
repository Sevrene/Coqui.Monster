import { Chip } from '@mui/material';

/**
 * Renders a CreditsChip component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.link - The link to navigate to when the chip is clicked.
 * @param {React.Component} props.LabelComponent - The component to render as the label for the chip.
 * @returns {React.Component} The rendered CreditsChip component.
 */
export default function CreditsChip({ link, LabelComponent }) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      style={{ width: '100%' }}
    >
      <Chip
        sx={{
          height: 'auto',
          width: '100%',
          '& .MuiChip-label': {
            width: '100%',
            overflow: 'visible',
          },
        }}
        clickable
        label={<LabelComponent />}
      />
    </a>
  );
}
