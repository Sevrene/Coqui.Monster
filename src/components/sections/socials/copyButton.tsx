'use client';

import { IconButton, Snackbar } from '@mui/material';

import { useState } from 'react';

interface CopyButtonProps {
  icon: React.ReactNode;
  copyText: string;
  color?: string;
}

export function CopyButton({
  icon,
  copyText = '',
  color = 'white',
}: CopyButtonProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(copyText).then(() => {
      setOpen(true);
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <IconButton
      aria-label='Copy contact email to clipboard'
      onClick={handleClick}
      sx={{
        color: color,
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message='Copied to clipboard!'
      />
      {icon}
    </IconButton>
  );
}
