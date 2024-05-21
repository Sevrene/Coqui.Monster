'use client';

import { Button } from '@mui/material';
import { DrawerContext } from './providers/drawerCtxProvider';
import { useContext } from 'react';

/**
 * A button component that toggles the drawer when clicked.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.toggleName - The name of the toggle.
 * @param {ReactNode} props.children - The content of the button.
 * @returns {JSX.Element} The rendered button component.
 */
export default function DrawerToggleButton({ children, ...props }) {
  const { toggleDrawer } = useContext(DrawerContext);
  const { toggleName, ...otherProps } = props;

  return (
    <Button
      onClick={() => {
        toggleDrawer(toggleName);
      }}
      {...otherProps}
    >
      {children}
    </Button>
  );
}
