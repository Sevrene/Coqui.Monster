import { renderContentBlock } from '../contentful';
import { Box, Card, Grid } from '@mui/material';

function LandingPage({ pageData }) {
  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ maxWidth: '70%', margin: '0 auto' }}>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid item xs={true} minWidth='300px'>
            <Card sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px'}}>
              {pageData.mainContent.map((contentBlock) => {
                return (
                  renderContentBlock(contentBlock)
                ) 
              })}
            </Card>
          </Grid>
          <Grid item width='250px'>
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