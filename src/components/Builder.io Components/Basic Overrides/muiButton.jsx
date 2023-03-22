import { Button } from "@mui/material";
import { TouchApp, Download } from "@mui/icons-material";

const MUIButton = (props) => {
  // Alter the startIcon based on icon settings
  const startIcon = props.properties?.startIcon?.showIcon ? (
    props.properties?.startIcon?.iconType === "default" ? (
      <Download />
    ) : (
      <img
        src={props.properties?.startIcon?.iconFile}
        alt="icon"
        width={24}
        height={24}
      />
    )
  ) : undefined;

  // Alter the endIcon based on icon settings
  const endIcon = props.properties?.endIcon?.showIcon ? (
    props.properties?.endIcon?.iconType === "default" ? (
      <TouchApp />
    ) : (
      <img
        src={props.properties?.endIcon?.iconFile}
        alt="icon"
        width={24}
        height={24}
      />
    )
  ) : undefined;

  return (
    <Button
      variant={props.properties?.variant}
      size={props.properties?.size}
      centerRipple={props.properties?.ripple === "center"}
      disableRipple={props.properties?.ripple === "none"}
      disableElevation={props.properties?.disableElevation}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={props.disable}
      href={props.link}
      target={props.newTab ? "_blank" : null}
      rel={props.newTab ? "noopener noreferrer" : null}
    >
      {props.text}
    </Button>
  );
};

export default MUIButton;
