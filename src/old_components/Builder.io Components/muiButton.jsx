import { Button } from "@mui/material";
import SvgIconLoader from "../../svgIconLoader";

/**
 * @file Defines the MUIButton component.
 *
 * A React functional component that renders a MUI Button component with optional start and end icons, link, target, and sometimes menu options.
 *
 * @see {@link https://mui.com/components/buttons/}
 * @see {@link https://mui.com/api/button/}
 *
 * @param {Object} props - The properties object that contains various attributes of the button.
 * @param {string} props.text - The text to display on the button.
 * @param {string} props.link - The link to navigate to when the button is clicked.
 * @param {boolean} props.newTab - Whether to open the link in a new tab.
 * @param {Object} props.properties - The properties object that contains various attributes of the button.
 * @param {string} props.properties.variant - The variant of the button.
 * @param {string} props.properties.size - The size of the button.
 * @param {string} props.properties.ripple - The ripple effect of the button.
 * @param {boolean} props.properties.disableElevation - Whether to disable the elevation of the button.
 * @param {boolean} props.properties.disable - Whether to disable the button.
 * @param {Object} props.properties.startIcon - The properties object that contains various attributes of the start icon.
 * @param {boolean} props.properties.startIcon.showIcon - Whether to show the start icon.
 * @param {string} props.properties.startIcon.color - The color of the start icon.
 * @param {string} props.properties.startIcon.iconFile - The icon file of the start icon.
 * @param {Object} props.properties.endIcon - The properties object that contains various attributes of the end icon.
 * @param {boolean} props.properties.endIcon.showIcon - Whether to show the end icon.
 * @param {string} props.properties.endIcon.color - The color of the end icon.
 * @param {string} props.properties.endIcon.iconFile - The icon file of the end icon.
 * @param {string} props.type - The type of button. Passed internally to determine whether to render a menu button or a regular button.
 * @param {function} props.handleMenuClick - The function to call when the menu button is clicked. Passed internally.
 * 
 * @returns {jsx} The MUI Button component.
 *
 * @exports MUIButton
 */
const MUIButton = (props) => {
  return (
    <Button
      variant={props.properties.variant}
      size={props.properties.size}
      centerRipple={props.properties.ripple === "center"}
      disableRipple={props.properties.ripple === "none"}
      disableElevation={props.properties.disableElevation}
      color="inherit"
      startIcon={
        props.properties.startIcon?.showIcon && (
          props.properties.startIcon.iconFile?.endsWith(".svg") ? (
            <SvgIconLoader {...props.properties.startIcon} />
          ) : (
            <img
              src={props.properties.startIcon.iconFile}
              alt={props.text}
              style={{ width: "24px", height: "24px" }}
            />
          )
        )
      }
      endIcon={
        props.properties.endIcon?.showIcon && (
          <SvgIconLoader {...props.properties.endIcon} />
        )
      }
      disabled={props.properties.disable}
      href={props.link}
      target={props.newTab ? "_blank" : null}
      rel={props.newTab ? "noopener noreferrer" : null}
      onClick={
        props.type === "menu"
          ? (event) => props.handleMenuClick(event, props.text)
          : null
      }
    >
      {props.text}
    </Button>
  );
};

export default MUIButton;
