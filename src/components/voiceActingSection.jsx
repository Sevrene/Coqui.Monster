import { Box, Divider, Stack } from '@mui/material';

import ContentSection from './contentSection';
import VoiceActingRole from './voiceActingRole';
import { voiceActingRoles } from '@/mockData';
import { voiceActingSection } from '@/mockData';

export default function VoiceActingSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <ContentSection {...voiceActingSection} />
      <Divider flexItem sx={{ margin: '12px 0' }} />
      <Stack
        spacing={2}
        sx={{
          width: { xs: 'auto', lg: '50%' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {voiceActingRoles.map((role) => (
          <VoiceActingRole key={role.title} {...role} />
        ))}
      </Stack>
    </Box>
  );
}
