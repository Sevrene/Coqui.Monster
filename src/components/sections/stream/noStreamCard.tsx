import { Button, Card, CardContent, Typography } from '@mui/material';

export default function NoStreamCard({ channel }) {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant='h6' component='div'>
          Twitch Player Unavailable
        </Typography>
        <Typography variant='body2' color='text.secondary' mt={1} mb={2}>
          Screen is too narrow to display the embedded player.
        </Typography>
        <Button
          variant='contained'
          href={`https://twitch.tv/${channel}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Watch on Twitch
        </Button>
      </CardContent>
    </Card>
  );
}
