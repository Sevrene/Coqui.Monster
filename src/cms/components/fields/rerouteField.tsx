import { Box, Button, Typography } from '@mui/material';

import Link from 'next/link';
import React from 'react';

interface RerouteFieldProps {
  field?: {
    label?: string;
    admin?: {
      description?: string;
      custom?: {
        link?: string;
      };
    };
  };
}

const RerouteField: React.FC<RerouteFieldProps> = ({ field }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        borderRadius: 1,
        backgroundColor: 'var(--theme-elevation-100)',
        border: '1px solid var(--theme-elevation-200)',
        marginTop: 2,
      }}
    >
      {field?.label && (
        <Typography sx={{ marginBottom: 1 }}>{field.label}</Typography>
      )}
      <Link href={field?.admin?.custom?.link}>
        <Button variant='contained'>Take Me There</Button>
      </Link>
      <Typography
        sx={{
          color: 'var(--theme-elevation-400)',
          marginTop: 1,
        }}
      >
        {field?.admin?.description}
      </Typography>
    </Box>
  );
};

export default RerouteField;
