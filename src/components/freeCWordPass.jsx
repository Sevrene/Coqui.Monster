import { Box, Tooltip } from '@mui/material';

import Image from 'next/image';

export function FreeCWordPass() {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: '30%',
        top: '-70%',
        transition: 'top 0.3s ease-in-out',
        '&:hover': {
          top: '0%',
        },
      }}
    >
      <Tooltip title='Free C Word Pass'>
        <a href='/free-cword-pass'>
          <Image
            src='/images/brand/cute_pass.png'
            alt='Logo'
            width={64}
            height={64}
            style={{
              position: 'absolute',

              cursor: 'pointer',
            }}
          />
        </a>
      </Tooltip>
    </Box>
  );
}
