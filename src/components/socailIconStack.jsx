import SocialIcon from './SocialIcon';
import { Stack } from '@mui/material';

export default function SocialIconStack({ socials, direction = 'row' }) {
  return (
    <Stack direction={direction} flexWrap='wrap'>
      {socials.map((social) => (
        <SocialIcon key={social.name} social={social} />
      ))}
    </Stack>
  );
}
