import { Alert, Box, List, ListItem, Typography } from '@mui/material';

export default function ReadMeSection() {
  return (
    <Box sx={{ textAlign: 'left', width: '100%', px: '5%' }}>
      <Box sx={{ border: '1px solid #ddd', borderRadius: 2, p: 3, mb: 4 }}>
        <Typography variant='h4'>Overview</Typography>
        <hr />
        <Box my={3} pl={3}>
          <Typography variant='h5' gutterBottom>
            General Experience
          </Typography>
          <List sx={{ pl: 3 }}>
            <ListItem>
              <Typography>
                Manage site content and settings from this dashboard. This
                includes editing text, images, and other media.
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box my={3} pl={3}>
          <Typography variant='h5' gutterBottom>
            Versioning [Alpha]
          </Typography>
          <List sx={{ pl: 3 }}>
            <ListItem
              alignItems='flex-start'
              sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <Typography sx={{ mb: 1 }}>
                All content changes are tracked. Review previous edits, restore
                earlier versions, and maintain a clear history of updates.
                <br />
                Versioning is limited to the last 5 changes per section to
                reduce storage and improve performance.
              </Typography>
              <Alert severity='warning'>
                Versioning may be removed after further testing. Versioning is
                not available for some sections due to a known Payload bug.
                Highly recommended to not utilize at this time.
              </Alert>
            </ListItem>
          </List>
        </Box>
        <Box my={3} pl={3}>
          <Typography variant='h5' gutterBottom>
            Live Preview [Alpha]
          </Typography>
          <List sx={{ pl: 3 }}>
            <ListItem
              alignItems='flex-start'
              sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <Typography>
                See changes in real time before publishing. The preview updates
                instantly as you edit.
              </Typography>
              <Alert severity='warning'>
                Live Preview may be removed after further testing. Live Preview
                is only available for some sections. Highly recommended to not
                utilize at this time.
              </Alert>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box sx={{ border: '1px solid #ddd', borderRadius: 2, p: 3, mb: 4 }}>
        <Box my={3}>
          <Typography variant='h4'>Tutorial</Typography>
          <hr />
          <Box my={3} pl={3}>
            <Typography variant='h5' gutterBottom>
              Navigation
            </Typography>
            <Typography>
              Use the sidebar or the tiles above this guide to access the
              section you want to manage. Everything is sorted into three main
              categories:
            </Typography>
            <List sx={{ pl: 3 }}>
              <ListItem>
                <Typography>
                  <b>System:</b> Supporting collections that affect other areas
                  of the site but are not direct content.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <b>Site:</b> Collections that configure site-wide features but
                  are not direct user-facing content.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <b>Content:</b> These are the collections you’ll interact with
                  most. They contain all the main editable content.
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box my={3} pl={3}>
            <Typography variant='h5' gutterBottom>
              Publishing Changes
            </Typography>
            <Typography gutterBottom>
              After making changes, click the <b>Save</b> or{' '}
              <b>Publish Changes</b> button in the top right corner of the
              screen. This will save your changes as the live data and publish
              them to the site.
            </Typography>
            <Alert severity='info'>
              Changes will not be immediately reflected on the main site until
              the <b>Deploy Changes</b> button is clicked in this dashboard.
            </Alert>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
