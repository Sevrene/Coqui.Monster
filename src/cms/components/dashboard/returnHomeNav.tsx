import { Box, Button } from '@mui/material';

import { IconArrowBackUp } from '@tabler/icons-react';
import Link from 'next/link';

export default function ReturnHomeNav() {
  return (
    <Box
      display='flex'
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        pb: 2,
      }}
    >
      <Link href='/admin' passHref>
        <Button
          variant='contained'
          color='primary'
          startIcon={<IconArrowBackUp size='16px' />}
        >
          Admin Dashboard
        </Button>
      </Link>
    </Box>
  );
}
