'use client';

import { IconButton, Snackbar } from '@mui/material';

import { useState } from 'react';

/**
 * Renders a copy button component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.icon - The icon to be displayed in the button.
 * @returns {JSX.Element} The copy button component.
 */
export function CopyButton({ icon }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <IconButton
      aria-label='Copy contact email to clipboard'
      onClick={handleClick}
      sx={{
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
