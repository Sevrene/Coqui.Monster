import { List } from '@mui/material';
import MusicCredit from './musicCredit';

/**
 * Renders a list of music credits.
 *
 * @param {Object[]} credits - The array of music credits.
 * @returns {JSX.Element} The rendered list of music credits.
 */
export default function MusicCreditsList({ credits }) {
  const sortedCredits = [...credits].sort((a, b) =>
    a.songName.localeCompare(b.songName)
  );

  return (
    <List style={{ maxWidth: '300px' }}>
      {sortedCredits.map((credit) => (
        <MusicCredit key={credit.songName} credit={credit} />
      ))}
    </List>
  );
}
