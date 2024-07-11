import { Box, Tooltip, Typography } from '@mui/material';

import { FreeCWordPass } from '../freeCWordPass';
import Image from 'next/image';
import { InfoOutlined } from '@mui/icons-material';
import { constStyles } from '@/styles/constStyles';

/**
 * Renders the AnnouncementBar component.
 * @returns {JSX.Element|null} The rendered AnnouncementBar component.
 */
export function AnnouncementBar() {
  const announcement = 'NEW Stream Schedule!';

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
        <Tooltip
          title={
            <Image
              src='/images/schedule_meme.jpg'
              alt='New Stream Schedule'
              width='480'
              height='270'
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          }
          placement='bottom'
          sx={{
            marginLeft: '4px',
            marginTop: '6px',
          }}
        >
          <InfoOutlined fontSize='small' htmlColor='black' />
        </Tooltip>
        <FreeCWordPass />
      </Box>
    );
  }
}
