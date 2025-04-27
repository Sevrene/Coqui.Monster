import { Box, Button, Stack, Typography } from '@mui/material';

export default function DashboardHookButtons() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'var(--theme-elevation-100)',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <Typography variant='h4' component='h2' gutterBottom>
        Dashboard Hooks
      </Typography>
      <Stack
        direction={'row'}
        spacing={2}
        sx={{
          display: 'flex',
          marginBottom: '16px',
        }}
      >
        {/* TODO: Determine if any of the hooks are viable to do without a rebuild */}
        {/* Possible just have the one build hook, with checkboxes for the other events */}
        <Button variant='outlined'>Deploy Site</Button>
        <Button variant='outlined'>Regenerate Icons</Button>
        <Button variant='outlined'>Regenerate Redirects</Button>
      </Stack>
    </Box>
  );
}
