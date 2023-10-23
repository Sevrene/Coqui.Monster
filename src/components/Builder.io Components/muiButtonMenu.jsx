import React, { useState } from 'react';

import MUIButton from './muiButton';
import MUIMenu from './muiMenu';

const MUIButtonMenu = (props) => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (event, menuId) => {
    event.stopPropagation();
    setOpenMenu({ anchor: event.currentTarget, menuId });
  };

  // Extract menuItems from props
  const { text, menuItems, ...buttonProps } = props;

  return (
    <>
      <MUIButton {...buttonProps} text={text} type="menu" handleMenuClick={handleMenuClick} />
      <MUIMenu menuItems={menuItems} text={text} openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}

export default MUIButtonMenu;