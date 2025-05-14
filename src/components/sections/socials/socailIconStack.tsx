import { Social } from '@/payload-types';

import type { StackProps } from '@mui/material';
import { Stack } from '@mui/material';
import SocialIcon from './socialIcon';

type SocialIconStackProps = {
  socials: Social[];
  direction?: StackProps['direction'];
  sx?: StackProps['sx'];
};

export default function SocialIconStack({
  socials,
  direction = 'row',
  sx = {},
}: SocialIconStackProps) {
  return (
    <Stack direction={direction} flexWrap='wrap' sx={sx}>
      {socials?.map((social) => (
        <SocialIcon key={social.name} social={social} />
      ))}
    </Stack>
  );
}
