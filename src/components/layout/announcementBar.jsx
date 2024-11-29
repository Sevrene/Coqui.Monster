import { Box, Typography } from '@mui/material';

import { constStyles } from '@/styles/constStyles';
import { FreeCWordPass } from '../freeCWordPass';

/**
 * Renders the AnnouncementBar component.
 * @returns {JSX.Element|null} The rendered AnnouncementBar component.
 */
export function AnnouncementBar() {
  const announcement =
    'Version 2.1 currently in development! 🚀 Updates may be slower than normal';

  if (!announcement) {
    return null;
  } else {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '32px',
          background: constStyles.brandYellow,
          borderBottom: '2px solid black',
        }}
      >
        <Typography variant='h5' color='black'>
          {announcement}
        </Typography>
        <FreeCWordPass />
      </Box>
    );
  }
}
