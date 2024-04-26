'use client';

import { Button, Menu, MenuItem } from '@mui/material';

import { IconChevronUp } from '@tabler/icons-react';
import MultiLevelMenuItem from './MultiLevelMenuItem';
import { useState } from 'react';

function renderMenuItem(item) {
  if (item.content.menu) {
    return <MultiLevelMenuItem item={item} />;
  }

  return <MenuItem key={item.content.text}>{item.content.text}</MenuItem>;
}

export default function MenuButton({ item: { content, settings } }) {
  const [menuContext, setMenuContext] = useState(null);
  const menuChevronRotation = menuContext?.menuId === content.text ? 180 : 0;

  const handleMenuClick = (event, menuId) => {
    setMenuContext({ anchor: event.currentTarget, menuId });
  };

  const handleMenuClose = () => {
    setMenuContext(null);
  };

  return (
    <>
      <Button
        variant={settings.variant || 'text'}
        size={settings.size || 'medium'}
        // TODO: Make Ripple a global setting
        //centerRipple={settings.ripple === 'center' || false}
        //disableRipple={settings.ripple === 'none' || false}
        color='inherit'
        disabled={settings.disable || false}
        startIcon={null}
        endIcon={
          content.menu ? (
            <IconChevronUp
              style={{
                transform: `rotate(${menuChevronRotation}deg)`,
                transition: 'transform 0.3s',
              }}
            />
          ) : null
        }
        href={content?.link}
        target={content?.newTab ? '_blank' : null}
        rel={content?.newTab ? 'noopener noreferrer' : null}
        onClick={
          content.menu ? (event) => handleMenuClick(event, content.text) : null
        }
        style={{ color: 'white', backgroundColor: 'green' }}
      >
        {content?.text}
      </Button>
      {content?.menu && (
        <Menu
          anchorEl={menuContext?.anchor}
          open={Boolean(menuContext?.anchor)}
          onClose={handleMenuClose}
        >
          {content?.menu.map((item) => renderMenuItem(item))}
        </Menu>
      )}
    </>
  );
}
