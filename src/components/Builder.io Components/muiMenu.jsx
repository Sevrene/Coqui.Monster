import { Menu, MenuItem } from "@mui/material";

import { Link } from "react-router-dom";
import SvgIconLoader from "../../svgIconLoader";

/**
 * @file Defines the MUIMenu component.
 *
 * A React functional component that renders a MUI Menu component with optional menu items.
 *
 * @see {@link https://mui.com/components/menus/}
 * @see {@link https://mui.com/api/menu/}
 *
 * @param {Object} props - The properties object that contains various attributes of the menu.
 * @param {Object} props.text - The text from the menu button. Used for menu item ids.
 * @param {Object[]} props.menuItems - The array of menu items to display in the menu.
 * @param {string} props.menuItems[].text - The text to display on the menu item.
 * @param {string} props.menuItems[].link - The link to navigate to when the menu item is clicked.
 * @param {boolean} props.menuItems[].newTab - Whether to open the link in a new tab.
 * @param {Object} props.menuItems[].properties - The properties object that contains various attributes of the menu item.
 * @param {Object} props.menuItems[].properties.startIcon - The properties object that contains various attributes of the start icon.
 * @param {boolean} props.menuItems[].properties.startIcon.showIcon - Whether to show the start icon.
 * @param {string} props.menuItems[].properties.startIcon.color - The color of the start icon.
 * @param {string} props.menuItems[].properties.startIcon.iconFile - The icon file to display as the start icon.
 * @param {Object} props.menuItems[].properties.endIcon - The properties object that contains various attributes of the end icon.
 * @param {boolean} props.menuItems[].properties.endIcon.showIcon - Whether to show the end icon.
 * @param {string} props.menuItems[].properties.endIcon.color - The color of the end icon.
 * @param {string} props.menuItems[].properties.endIcon.iconFile - The icon file to display as the end icon.
 * @param {boolean} props.menuItems[].properties.dense - Whether the menu item should have a dense padding.
 * @param {boolean} props.menuItems[].properties.disableGutters - Whether the menu item should have gutters.
 * @param {boolean} props.menuItems[].properties.divider - Whether the menu item should have a divider.
 * @param {boolean} props.menuItems[].properties.disable - Whether the menu item should be disabled.
 *
 * @returns {React.ReactElement} The MUIMenu component.
 *
 * @exports MUIMenu
 */
const MUIMenu = (props) => {
  const handleMenuClose = () => {
    props.setOpenMenu(null);
  };

  return (
    <Menu
      anchorEl={props.openMenu ? props.openMenu.anchor : null}
      keepMounted
      open={props.openMenu ? props.openMenu.menuId === props.text : false}
      onClose={handleMenuClose}
    >
      {props.menuItems?.map((item, index) => (
        <MenuItem
          key={index}
          dense={item.properties.dense}
          disableGutters={item.properties.disableGutters}
          divider={item.properties.divider}
          component={Link}
          to={item.link}
          target={item.newTab ? "_blank" : undefined}
          rel={item.newTab ? "noopener noreferrer" : undefined}
          onClick={handleMenuClose}
          disabled={item.properties.disable}
        >
          {item.properties.startIcon?.showIcon && (
            <SvgIconLoader {...item.properties.startIcon} />
          )}
          {item.text}
          {item.properties.endIcon?.showIcon && (
            <SvgIconLoader {...item.properties.endIcon} />
          )}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MUIMenu;
