'use client';

import { Button, Drawer, Tooltip } from '@mui/material';

import { Brush } from '@mui/icons-material';
import { DrawerContext } from '@/components/providers/drawerCtxProvider';
import { useContext } from 'react';

/**
 * Renders a miscellaneous drawer component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered inside the drawer.
 * @returns {JSX.Element} The rendered miscellaneous drawer component.
 */
export default function MiscDrawer({ children }) {
  const { openDrawer, toggleDrawer } = useContext(DrawerContext);

  const isOpen = openDrawer === 'misc';

  return (
    <>
      <Tooltip title='Misc Credits' placement='top-start'>
        <Button
          onClick={() => toggleDrawer('misc')}
          variant='contained'
          size='large'
          color='brandYellow'
          startIcon={<Brush />}
          sx={{
            border: '1px solid black',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            boxShadow: '-5px -5px 10px 0 black',
            paddingRight: '48px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '-5px -5px 10px 0 black',
              transform: 'translateX(-25%)',
            },
          }}
        />
      </Tooltip>
      <Drawer anchor='right' open={isOpen} onClose={() => toggleDrawer(null)}>
        {children}
      </Drawer>
    </>
  );
}
