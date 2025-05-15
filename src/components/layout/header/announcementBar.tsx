import { Box, Typography } from '@mui/material';

import { RichText } from '@/components/rich_text/richText';
import { Header } from '@/payload-types';
import { ReactNode } from 'react';

interface AnnouncementBarProps {
  announcement?: Header['announcement'];
}

export default function AnnouncementBar({
  announcement,
}: AnnouncementBarProps): ReactNode {
  const { text, color } = announcement;

  if (!text) {
    return null;
  }

  // If color is a number, log an error and return null to prepare for future payload migration
  if (typeof color === 'number') {
    console.error(
      'Announcement is a relationship ID number. Expected an object. Need to accommodate for this in the future.'
    );
    return null;
  }

  // If there is no announcement text, return null to render nothing
  if (!announcement?.text) {
    return null;
  } else {
    // Render the announcement bar with the provided text and styles
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: color.color || 'link.main',
          borderBottom: '2px solid black',
          zIndex: 2,
        }}
      >
        <Typography
          variant='h5'
          color='black'
          sx={{
            textAlign: 'center',
            '& p': { margin: 0 },
            '& a': { color: announcement.linkColorOverride || 'default' },
          }}
        >
          <RichText lexicalData={announcement.text} />
        </Typography>
      </Box>
    );
  }
}
