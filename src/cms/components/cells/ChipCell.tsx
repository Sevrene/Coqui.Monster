import { Chip, Stack, Tooltip } from '@mui/material';

interface ChipCellProps {
  cellData?: string[];
}

const MAX_VISIBLE_CHIPS = 2;

export default function ChipCell({ cellData }: ChipCellProps) {
  if (!cellData || cellData.length === 0) {
    return <>- No Entries -</>;
  }

  const visibleChips = cellData.slice(0, MAX_VISIBLE_CHIPS);
  const hiddenChipsCount = cellData.length - MAX_VISIBLE_CHIPS;

  return (
    <Stack
      direction='row'
      spacing={1}
      sx={{ flexWrap: 'nowrap', overflow: 'hidden' }}
    >
      {visibleChips.map((item, index) => (
        <Chip
          key={index}
          label={item}
          sx={{
            color: 'var(--theme-text)',
            backgroundColor: 'var(--theme-elevation-200)',
          }}
        />
      ))}
      {hiddenChipsCount > 0 && (
        <Tooltip title={cellData.slice(MAX_VISIBLE_CHIPS).join(', ')}>
          <Chip
            label={`+${hiddenChipsCount}`}
            sx={{
              color: 'var(--theme-text)',
              backgroundColor: 'var(--theme-elevation-200)',
            }}
          />
        </Tooltip>
      )}
    </Stack>
  );
}
