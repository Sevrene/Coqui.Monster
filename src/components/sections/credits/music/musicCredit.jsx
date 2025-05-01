import { LibraryMusic, RecentActors } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Tooltip,
} from '@mui/material';

import PlayableMusicCredit from './playableMusicCredit';

/**
 * Renders a music credit component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.credit - The credit object containing song information.
 * @param {string} props.credit.songName - The name of the song.
 * @param {string} props.credit.artist - The name of the artist.
 * @param {string} props.credit.image - The URL of the song image.
 * @param {string} props.credit.songLink - The URL of the original song.
 * @param {string} props.credit.artistSocials - The URL of the artist's social media.
 * @returns {JSX.Element} The rendered MusicCredit component.
 */
export default function MusicCredit({ credit }) {
  return (
    <ListItem
      divider
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ListItemAvatar>
          {credit.image && <Avatar alt={credit.songName} src={credit.image} />}
        </ListItemAvatar>
        <ListItemText primary={credit.songName} secondary={credit.artist} />
        {credit.track && <PlayableMusicCredit credit={credit} />}
      </Box>
      <Stack direction='row' spacing='8px'>
        <Tooltip title='Original Song'>
          <Button
            href={credit.songLink}
            disabled={!credit.songLink}
            target='_blank'
            endIcon={<LibraryMusic />}
            color='link'
            sx={{
              width: '50%',
              borderRadius: 2,
              whiteSpace: 'nowrap',
              fontSize: credit.songLink ? 'initial' : 'x-small',
            }}
          >
            {credit.songLink ? 'Song' : 'No Song Link'}
          </Button>
        </Tooltip>
        <Tooltip title='Artist Socials'>
          <Button
            href={credit.artistSocials}
            disabled={!credit.artistSocials}
            target='_blank'
            endIcon={<RecentActors />}
            color='link'
            sx={{
              width: '50%',
              borderRadius: 2,
              whiteSpace: 'nowrap',
              fontSize: credit.artistSocials ? 'initial' : 'x-small',
            }}
          >
            {credit.artistSocials ? 'Artist' : 'No Artist Link'}
          </Button>
        </Tooltip>
      </Stack>
    </ListItem>
  );
}
