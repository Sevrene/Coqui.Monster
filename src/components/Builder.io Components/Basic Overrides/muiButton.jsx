import { Button, Menu, MenuItem } from "@mui/material";

import { Link } from "react-router-dom";
import SvgIconLoader from "../../../svgIconLoader";
import { useState } from "react";

/**
  MUIButton
  
  A customizable button component that accepts various properties to modify its appearance, functionality, and behavior.
  It renders a MUI Button component with optional start and end icons, link, target, and menu options.
  @param {Object} props - The properties object that contains various attributes of the button.
    @param {string} text - The text to display on the button.
    @param {string} type - The type of button, either "menu" or undefined. If "menu", it renders a menu instead of a regular button.
    @param {string} link - The link URL of the button.
    @param {boolean} newTab - Determines whether to open the link in a new tab.
    @param {Object[]} menuItems - An array of menu items to be displayed if type is "menu".
      @param {string} text - The text displayed in the menu item.
      @param {string} link - The URL the menu item links to.
      @param {boolean} newTab - Determines whether to open the link in a new tab or not.
      @param {Object} properties - Additional properties for the menu item.
        @param {boolean} dense - Determines whether to use compact vertical padding for smaller lists.
        @param {boolean} disableGutters - Determines whether to remove left and right padding.
        @param {boolean} divider - Determines whether to add a 1px light border to the bottom of the menu item.
        @param {Object} startIcon - The icon displayed at the start of the menu item.
          @param {boolean} showIcon - Determines whether to show the start icon or not.
          @param {URL} iconURL - The image file to use as the start icon.
        @param {Object} endIcon - The icon displayed at the end of the menu item.
          @param {boolean} showIcon - Determines whether to show the end icon or not.
          @param {URL} iconURL - The image file to use as the end icon.
        @param {boolean} disable - Determines whether to disable the button.
    @param {Object} properties - An object that contains all the additional properties for the button.
      @param {string} variant - The variant of the button, either "contained", "outlined", or "text".
      @param {string} size - The size of the button, either "small", "medium", or "large".
      @param {string} ripple - The ripple effect of the button, either "center", "full", or "none".
      @param {boolean} disableElevation - Determines whether to disable the elevation of the button.
      @param {Object} startIcon - An object that contains the properties of the start icon for the button.
        @param {boolean} showIcon - Determines whether to show the start icon.
        @param {URL} iconURL - The file path of the custom start icon.
      @param {Object} endIcon - An object that contains the properties of the end icon for the button.
        @param {boolean} showIcon - Determines whether to show the end icon.
        @param {URL} iconURL - The file path of the custom end icon.
    @param {boolean} disable - Determines whether to disable the button.
  @returns {JSX.Element} - A JSX element that renders the button component with specified properties.
*/
function MUIButton(props) {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (event, menuId) => {
    setOpenMenu({ anchor: event.currentTarget, menuId });
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
  };

  return (
    <>
      <Button
        variant={props.properties?.variant}
        size={props.properties?.size}
        centerRipple={props.properties?.ripple === "center"}
        disableRipple={props.properties?.ripple === "none"}
        disableElevation={props.properties?.disableElevation}
        color="inherit"
        startIcon={
          props.properties?.startIcon?.showIcon && (
            SvgIconLoader(props.properties.startIcon)
          )
        }
        endIcon={
          props.properties?.endIcon?.showIcon && (
            SvgIconLoader(props.properties.endIcon)
          )
        }
        disabled={props.disable}
        href={props.link}
        target={props.newTab ? "_blank" : null}
        rel={props.newTab ? "noopener noreferrer" : null}
        onClick={
          props.type === "menu"
            ? (event) => handleMenuClick(event, props.text)
            : null
        }
      >
        {props.text}
      </Button>
      {props.type === "menu" && (
        <Menu
          anchorEl={openMenu ? openMenu.anchor : null}
          keepMounted
          open={openMenu ? openMenu.menuId === props.text : false}
          onClose={handleMenuClose}
        >
          {props.menuItems.map((item, index) => (
            <MenuItem
              key={index}
              dense={item.properties?.dense}
              disableGutters={item.properties?.disableGutters}
              divider={item.properties?.divider}
              component={Link}
              to={item.link}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noopener noreferrer" : undefined}
              onClick={handleMenuClose}
              disabled={item.disable}
            >
              {item.properties?.startIcon?.showIcon && (
                <img
                  src={item.properties.startIcon.iconURL}
                  alt="icon"
                  width={24}
                  height={24}
                />
              )}
              {item.text}
              {item.properties?.endIcon?.showIcon && (
                <img
                  src={item.properties.endIcon.iconURL}
                  alt="icon"
                  width={24}
                  height={24}
                />
              )}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}

export default MUIButton;
