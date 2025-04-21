import { Box } from '@mui/material';
import Image from 'next/image';
import { JSX } from 'react';

export default function FreeCWordPass(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        zIndex: 1,
        transform: 'translateY(-45px)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(0)',
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
