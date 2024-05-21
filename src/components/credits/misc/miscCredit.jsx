import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { InfoOutlined, RecentActors } from '@mui/icons-material';

/**
 * Renders a miscellaneous credit component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.credit - The credit object containing information about the credit.
 * @param {string} props.credit.title - The title of the credit.
 * @param {string} props.credit.body - The body text of the credit.
 * @param {string} props.credit.image - The URL of the image associated with the credit.
 * @param {string} props.credit.link - The URL of the artist's social media profile.
 * @returns {JSX.Element} The rendered miscellaneous credit component.
 */
export default function MiscCredit({ credit }) {
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
          {credit.image && <Avatar alt={credit.title} src={credit.image} />}
        </ListItemAvatar>
        <ListItemText primary={credit.title} secondary={credit.body} />
        <Tooltip
          title='Additional details go here if subtitles cant easily describe the credit in a short blurb'
          placement='left'
        >
          <InfoOutlined />
        </Tooltip>
      </Box>
      <Tooltip title={'Artist Socials'}>
        <Button
          href={credit.link}
          disabled={!credit.link}
          target='_blank'
          endIcon={<RecentActors />}
          sx={{ width: '100%', borderRadius: 2, color: 'brandYellow.main' }}
        >
          {credit.link ? 'Artist' : 'No Artist Link'}
        </Button>
      </Tooltip>
    </ListItem>
  );
}
