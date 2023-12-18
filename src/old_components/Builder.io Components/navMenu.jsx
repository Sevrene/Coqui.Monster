import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';

const MuiMenu = ({ menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenuItem = (menuItem) => {
    if (menuItem.children) {
      return (
        <li key={menuItem.text}>
          <button onClick={handleClick}>{menuItem.text}</button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItem.children.map((child) => renderMenuItem(child))}
          </Menu>
        </li>
      );
    } else {
      return (
        <li key={menuItem.text}>
          <Link to={menuItem.link}>
            {menuItem.text}
          </Link>
        </li>
      );
    }
  };

  return (
    <nav>
      <ul>{menuItems.map((menuItem) => renderMenuItem(menuItem))}</ul>
    </nav>
  );
};

export default MuiMenu;
