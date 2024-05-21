import { SvgIcon } from '@mui/material';
import ThreeAmLogoSvg from '/public/images/brand/logo/3amLogo.svg';

/**
 * Renders the ThreeAmLogo component with the specified color.
 *
 * @param {string} newColor - The color to apply to the ThreeAmLogo component.
 * @returns {JSX.Element} The rendered ThreeAmLogo component.
 */
export default function ThreeAmLogo(newColor) {
  return (
    <SvgIcon sx={{ color: newColor }}>
      <ThreeAmLogoSvg />
    </SvgIcon>
  );
}
