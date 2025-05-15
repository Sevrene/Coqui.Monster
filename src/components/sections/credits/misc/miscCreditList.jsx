import { List } from '@mui/material';
import MiscCredit from './miscCredit';

/**
 * Renders a list of miscellaneous credits.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.credits - The array of credits to be rendered.
 * @returns {JSX.Element} The rendered component.
 */
export default function MiscCreditsList({ credits }) {
  const sortedCredits = [...credits].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <List style={{ maxWidth: '300px' }}>
      {sortedCredits.map((credit) => (
        <MiscCredit key={credit.title} credit={credit} />
      ))}
    </List>
  );
}
