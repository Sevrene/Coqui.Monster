import { ReactSVG } from "react-svg";
import { SvgIcon } from "@mui/material";

// TODO: Find a method of extract the SVG data from ReactSVG to avoid triple wrapping svg tags

/**
  SvgIconLoader Helper Component
  
  A React component that renders an external icon from a provided url.
  @param {Object} props - An object containing the props for the component.ndered.
    @param {URL} iconURL - The icon file to be displayed.
    @param {URL} color - The icon file to be displayed, if iconType is set to "upload".
  @returns {JSX.Element} - An triple wrapped svg component
*/
function SvgIconLoader(props) {

  return (
    <SvgIcon htmlColor={props.color}>
      <ReactSVG src={props.iconURL} wrapper="svg" />
    </SvgIcon>
  );
}

export default SvgIconLoader;