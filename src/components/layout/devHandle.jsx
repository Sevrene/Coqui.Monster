import { Box, Typography } from '@mui/material';

export default function DevHandle() {
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
        href='https://discord.com/users/167827741360652290'
        sx={{
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        Sevrene
      </Box>
    </Typography>
  );
}
