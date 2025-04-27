'use client';

import { Button, Drawer, Tooltip } from '@mui/material';

import { DrawerContext } from '@/providers/drawerCtxProvider';
import { IconMusic } from '@tabler/icons-react';
import { useContext } from 'react';

/**
 * Renders a music drawer component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered inside the drawer.
 * @returns {JSX.Element} The rendered music drawer component.
 */
export default function MusicDrawer({ children }) {
  const { openDrawer, toggleDrawer } = useContext(DrawerContext);

  const isOpen = openDrawer === 'music';

  return (
    <>
      <Tooltip title='Music Credits' placement='top-start'>
        <Button
          onClick={() => toggleDrawer('music')}
          variant='contained'
          size='large'
          color='links'
          startIcon={<IconMusic />}
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
