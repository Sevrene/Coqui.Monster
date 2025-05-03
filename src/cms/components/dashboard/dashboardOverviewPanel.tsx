import { Box, Stack, Typography } from '@mui/material';

import ActionButtons from './actionButtons';
import ReadMeSection from './readMeSection';

export default function DashboardActionsPanel() {
  return (
    <Stack
      direction={'row'}
      spacing={2}
      sx={{
        display: 'flex',
        marginBottom: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          backgroundColor: 'var(--theme-elevation-100)',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <Typography variant='h3' gutterBottom>
          Payload CMS Dashboard Overview
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Manage the content and settings of{' '}
          {` ${process.env.NEXT_PUBLIC_BASE_URL}`} from this dashboard.
        </Typography>
        <ReadMeSection />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignSelf: 'flex-start',
          padding: '16px',
          backgroundColor: 'var(--theme-elevation-100)',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <Typography variant='h4' gutterBottom>
          Dashboard Actions
        </Typography>
        <Stack
          direction={'row'}
          spacing={2}
          sx={{
            display: 'flex',
            my: '16px',
          }}
        >
          <ActionButtons />
        </Stack>
      </Box>
    </Stack>
  );
}
