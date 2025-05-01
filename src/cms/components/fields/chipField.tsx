import { Chip, Stack, Typography } from '@mui/material';

import React from 'react';

interface ChipFieldProps {
  data?: any;
  value?: { location: string }[];
  field?: {
    label?: string;
    admin?: {
      description?: string;
    };
  };
}

const ChipField: React.FC<ChipFieldProps> = ({ data, field }) => {
  const items = data?.assignedTo || [];

  return (
    <div>
      {field?.label && (
        <Typography sx={{ marginBottom: 1 }}>{field.label}</Typography>
      )}
      <Stack direction='row' spacing={1} flexWrap='wrap'>
        {items.length > 0 ? (
          items.map((item, index) => (
            <Chip
              key={index}
              sx={{
                color: 'var(--theme-text)',
                backgroundColor: 'var(--theme-elevation-200)',
              }}
              label={<Typography>{item}</Typography>}
            />
          ))
        ) : (
          <Typography>- No entries -</Typography>
        )}
      </Stack>
      <Typography
        sx={{
          color: 'var(--theme-elevation-400)',
          marginTop: 1,
        }}
      >
        {field?.admin?.description}
      </Typography>
    </div>
  );
};

export default ChipField;
