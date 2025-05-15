import { Social } from '@/payload-types';
import SocialIcon from './socialIcon';
import { SocialWithIcon } from '@/cms_data/headerData';
import { Stack } from '@mui/material';
import type { StackProps } from '@mui/material';

type SocialIconStackProps = {
  socials: SocialWithIcon[] | Social[];
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
