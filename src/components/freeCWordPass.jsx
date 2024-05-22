import { Box, Tooltip } from '@mui/material';

import Image from 'next/image';

export function FreeCWordPass() {
  return (
    <Box
      sx={{
        position: 'sticky',
        transform: 'translateX(100px) translateY(-150%)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateX(100px) translateY(0)',
        },
      }}
    >
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
    </Box>
  );
}
