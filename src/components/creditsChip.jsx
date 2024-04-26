import { Chip, Typography } from '@mui/material';

/**
 * Renders a CreditsChip component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.link - The link to navigate to when the chip is clicked.
 * @param {string} props.title - The title to display in the chip.
 * @param {string} props.body - The body text to display in the chip.
 * @returns {JSX.Element} The rendered CreditsChip component.
 */
export default function CreditsChip({ link, title, body }) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <Chip
        sx={{
          height: 'auto',
          width: '100%',
        }}
        clickable
        label={
          <>
            <Typography variant='h5' align='center'>
              {title}
            </Typography>
            <Typography variant='body1' align='center'>
              {body}
            </Typography>
          </>
        }
      />
    </a>
  );
}
