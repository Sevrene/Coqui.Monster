import { Menu, MenuItem } from '@mui/material';
import React, { useRef, useState } from 'react';

function renderMenuItem(item) {
  if (item.content.menu) {
    return (
      <div style={{ pointerEvents: 'auto' }}>
        <MultiLevelMenuItem item={item} />;
      </div>
    );
  }

  return (
    <div style={{ pointerEvents: 'auto' }}>
      <MenuItem key={item.content.text}>{item.content.text}</MenuItem>
    </div>
  );
}

export default function MultiLevelMenuItem({ item: { content, settings } }) {
  const menuItemRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuEnter = (event) => {
    setIsMenuOpen(true);
  };

  const handleMenuLeave = (event) => {
    setIsMenuOpen(false);
  };

  return (
    <div onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
      <MenuItem key={content.text} ref={menuItemRef}>
        {content.text}
      </MenuItem>
      {content.menu && (
        <Menu
          anchorEl={menuItemRef.current}
          open={isMenuOpen}
          // TODO: These should alternate between deeper nested menus
          anchorOrigin={{ vertical: 'center', horizontal: 'right' }} // TODO: Maybe this should be top instead of center?
          transformOrigin={{ vertical: 'center', horizontal: 'left' }}
          hideBackdrop
          style={{ pointerEvents: 'none' }}
        >
          {content.menu.map((item) => renderMenuItem(item))}
        </Menu>
      )}
    </div>
  );
}
