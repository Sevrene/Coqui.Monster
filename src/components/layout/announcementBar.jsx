import { Box, Typography } from '@mui/material';

import { FreeCWordPass } from '../freeCWordPass';
import { constStyles } from '@/styles/constStyles';

/**
 * Renders the AnnouncementBar component.
 * @returns {JSX.Element|null} The rendered AnnouncementBar component.
 */
export function AnnouncementBar() {
  const announcement = 'Coqui.Monster 2.0 is Live!';

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
