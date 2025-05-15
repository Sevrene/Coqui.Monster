import { Box, Link as MUILink, Typography } from '@mui/material';

import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';

const bandWidth = '40px';
const bandSkew = '-20deg';
const bandColor = 'gray';

export default function DashboardHeader() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '16px',
        backgroundColor: 'var(--theme-elevation-100)',
        borderRadius: '8px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          width: bandWidth,
          backgroundColor: bandColor,
          transform: `skewX(${bandSkew})`,
        }}
      />
      <Typography variant='h4' component='h1' gutterBottom>
        <MUILink
          component={Link}
          href={process.env.NEXT_PUBLIC_BASE_URL}
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          <strong>
            {new URL(process.env.NEXT_PUBLIC_BASE_URL as string).hostname}
          </strong>
          <sup>
            <IconExternalLink size='16px' />
          </sup>
        </MUILink>
        {' Admin Dashboard'}
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          right: '0',
          width: bandWidth,
          backgroundColor: bandColor,
          transform: `skewX(${bandSkew})`,
        }}
      />
    </Box>
  );
}
