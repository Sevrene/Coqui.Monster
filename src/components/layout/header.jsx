import { AppBar, Box, Toolbar } from '@mui/material';

import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { sanityFetch } from '/sanity/sanity-utils.js';

export default async function Header() {
  const headerData = await sanityFetch('header');
  // TODO: Only allow one header to be published at a time

  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Image
            src=''
            alt='Logo'
            width={100}
            height={50}
            style={{ marginLeft: '10px' }}
          />
        </Box>
        <Box>
          <MenuIcon style={{ marginRight: '10px' }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
