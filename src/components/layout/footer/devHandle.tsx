import { Box, Typography } from '@mui/material';

import { ReactNode } from 'react';

export default function DevHandle({ devHandle }): ReactNode {
  if (!devHandle?.enabled) return null;

  return (
    <Typography
      sx={{
        marginLeft: '8px',
        fontSize: '0.8rem',
        color: 'white',
      }}
    >
      Developed by{' '}
      <Box
        component='a'
        href={devHandle.devHandleLink}
        sx={{
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {devHandle.devHandle}
      </Box>
    </Typography>
  );
}
