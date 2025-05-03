import { Box, Link as MUILink, Typography } from '@mui/material';

import Link from 'next/link';

export default function IconPickerDescription() {
  return (
    <Box
      sx={{
        color: 'var(--theme-elevation-400)',
        marginTop: 1,
      }}
    >
      <Typography>
        Full List of Icons:{' '}
        <MUILink
          component={Link}
          href='https://tabler-icons.io/'
          target='_blank'
          rel='noopener noreferrer'
          sx={{
            color: 'var(--theme-elevation-600)',
            textDecoration: 'underline',
            '&:hover': {
              color: 'var(--theme-elevation-500)',
            },
          }}
          underline='hover'
          color='inherit'
        >
          https://tabler-icons.io/
        </MUILink>
      </Typography>
      <Typography>
        Note: The text field is currently bugged. Only use the one inside the
        popup menu.
      </Typography>
    </Box>
  );
}
