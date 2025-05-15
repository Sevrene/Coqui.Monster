import { Chip, Stack, Typography } from '@mui/material';

import React from 'react';

const capitalize = (str: string) =>
  str ? str[0].toUpperCase() + str.slice(1) : str;

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
  const items = data?.assignedTo || data?.roles || [];

  return (
    <div>
      {field?.label && (
        <Typography sx={{ marginBottom: 1 }}>{field.label}</Typography>
      )}
      <Stack direction='row' spacing={1} flexWrap='wrap'>
        {items.length > 0 ? (
          items.map((item: string, index: number) => {
            const label = capitalize(item);
            return (
              <Chip
                key={index}
                sx={{
                  color: 'var(--theme-text)',
                  backgroundColor: 'var(--theme-elevation-200)',
                }}
                label={<Typography>{label}</Typography>}
              />
            );
          })
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
