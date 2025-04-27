import { Box, Typography } from '@mui/material';

export default function DashboardReadMe() {
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
        Dashboard Overview
      </Typography>
      <Typography variant='body1' component='p'>
        This dashboard allows you to manage the content and settings of
        {` ${process.env.NEXT_PUBLIC_BASE_URL}`}.
        {/* TODO: Write-up overview of general experience */}
        {/* TODO: Write-up overview of versionning */}
        {/* TODO: Write-up overview of Live Preview */}
      </Typography>
    </Box>
  );
}
