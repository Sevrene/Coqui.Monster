import { Button, Tooltip } from '@mui/material';

/**
 * Renders a support button component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display on the button.
 * @param {string} props.link - The link to navigate to when the button is clicked.
 * @param {string} props.tooltip - The tooltip text to display when hovering over the button.
 * @param {React.Element} props.icon - The icon element to display before the button text.
 * @param {Object} props.buttonProps - Additional props to pass to the button component.
 * @returns {React.Element} The rendered support button component.
 */
export default function SupportButton({
  text,
  link,
  tooltip,
  icon,
  buttonProps,
}) {
  return (
    <Tooltip title={tooltip} arrow>
      <Button {...buttonProps} startIcon={icon} href={link}>
        {text}
      </Button>
    </Tooltip>
  );
}
