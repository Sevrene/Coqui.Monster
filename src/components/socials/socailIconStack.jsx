import SocialIcon from './socialIcon';
import { Stack } from '@mui/material';

/**
 * Renders a stack of social icons.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.socials - The array of social objects.
 * @param {string} [props.direction='row'] - The direction of the stack.
 * @param {Object} [props.sx] - The additional styles for the stack.
 * @returns {JSX.Element} The rendered social icon stack.
 */
export default function SocialIconStack({ socials, direction = 'row', sx }) {
  return (
    <Stack direction={direction} flexWrap='wrap' sx={sx}>
      {socials.map((social) => (
        <SocialIcon key={social.name} social={social} />
      ))}
    </Stack>
  );
}
