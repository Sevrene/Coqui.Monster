import { renderContentBlock } from '../contentful';
import { Box, Card, Grid } from '@mui/material';

function LandingPage({ pageData }) {
  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: '70%', width: '100%', margin: '0 auto' }}>
        <Grid container spacing={2}>
          <Grid item xs={true}>
            <Card sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px'}}>
              {pageData.mainContent.map((contentBlock) => {
                return (
                  renderContentBlock(contentBlock)
                ) 
              })}
            </Card>
          </Grid>
          <Grid item xs={4} minWidth='250px'>
            <Card sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {pageData.extraContent.map((contentBlock) => {
                return (
                  renderContentBlock(contentBlock)
                ) 
              })}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default LandingPage;