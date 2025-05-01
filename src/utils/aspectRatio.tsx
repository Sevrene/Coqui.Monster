import { Box } from '@mui/material';

interface AspectRatioProps {
  ratio?: number;
  children: React.ReactNode;
}
/**
 * Maintains a specific aspect ratio for its children.
 *
 * Defaults to a 16:9 aspect ratio if not specified.
 */
export default function AspectRatio({
  ratio = 16 / 9,
  children,
}: AspectRatioProps) {
  const aspectPercentage = (1 / ratio) * 100 + '%';

  return (
    <Box sx={{ position: 'relative', paddingBottom: aspectPercentage }}>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
