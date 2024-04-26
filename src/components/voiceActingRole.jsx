import { Box, Button, Stack, Tooltip, Typography } from '@mui/material';

import { OpenInNew } from '@mui/icons-material';
import SaveableImage from './saveableImage';

export default function VoiceActingRole({
  title = 'Title',
  role = 'Role',
  link,
  imageData = {},
  reversed = false,
  buttonProps,
}) {
  return (
    <Stack
      direction={reversed ? 'row-reverse' : 'row'}
      sx={{ width: '100%', alignItems: 'center' }}
    >
      <SaveableImage imageData={imageData} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Typography variant='h5' whiteSpace='nowrap'>
          {title}
        </Typography>
        <Typography variant='h6' whiteSpace='nowrap'>
          {role}
        </Typography>
        <Button
          {...buttonProps}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          endIcon={<OpenInNew />}
        >
          Check It Out Here
        </Button>
      </Box>
    </Stack>
  );
}
