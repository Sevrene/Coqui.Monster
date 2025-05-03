import {
  Alert,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

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
                Manage site content and settings from this dashboard
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box my={3} pl={3}>
          <Typography variant='h5' gutterBottom>
            Versioning
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
                Versioning is not available for some sections due to a known
                Payload bug.
              </Alert>
            </ListItem>
          </List>
        </Box>
        <Box my={3} pl={3}>
          <Typography variant='h5' gutterBottom>
            Live Preview
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
                Live Preview is currently in testing stages, only available for
                some collections, and may not be viable to keep long-term.
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
                <ListItemText
                  primary='System'
                  secondary='Supporting collections that affect other areas of the site but are not direct content.'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Site'
                  secondary='Collections that configure site-wide features but are not direct user-facing content.'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Content'
                  secondary='These are the collections you’ll interact with most. They contain all the main editable content.'
                />
              </ListItem>
            </List>
          </Box>
          <Box my={3} pl={3}>
            <Typography variant='h5' gutterBottom>
              Publishing Changes
            </Typography>
            <Typography>
              After making changes, you may preview them in the live preview
              feature (*Please see the disclaimer in the Live Preview overview).
              This exact preview functionality may change in the future.
              <br />
              Publishing your changes is simple, but may be presented in a few
              ways:
            </Typography>
            <List sx={{ pl: 3 }}>
              <ListItem>
                <ListItemText
                  primary='1. Save Draft'
                  secondary='Click the <b>Save Draft</b> button in the top right corner of the
              screen. This will save your changes as a draft version for later
              review or editing.'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='2. Publish Changes'
                  secondary=' Click the <b>Publish Changes</b> button in the top right corner of
              the screen. This will save your changes as the live data and
              publish them to the site.'
                />
              </ListItem>
            </List>
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
