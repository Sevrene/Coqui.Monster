'use client';

import {
  IconButton,
  Menu,
  MenuItem,
  Stack,
  StackProps,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { MouseEvent, useState } from 'react';

import { IconMenu2 } from '@tabler/icons-react';
import SocialIcon from './socialIcon';
import { SocialWithIcon } from '@/cms_data/headerData';

type SocialIconStackMenuProps = {
  socials: SocialWithIcon[];
  direction?: StackProps['direction'];
  sx?: StackProps['sx'];
};

export default function SocialIconStackMenu({
  socials,
  direction = 'row',
  sx,
}: SocialIconStackMenuProps) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  if (!isSm) {
    return (
      <Stack direction={direction} flexWrap='wrap' sx={sx}>
        {socials?.map((social) => (
          <SocialIcon key={social.name} social={social} />
        ))}
      </Stack>
    );
  }

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <IconMenu2 />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        disableScrollLock
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Stack direction='column' sx={sx}>
          {socials?.map((social) => (
            <MenuItem
              key={social.name}
              component='a'
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              disableRipple
              onClick={handleClose}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <SocialIcon social={social} asLink={false} />
              {social.name}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
}
