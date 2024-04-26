import { SvgIcon } from '@mui/material';
import ThreeAmLogoSvg from '/public/images/brand/logo/3amLogo.svg';

export default function ThreeAmLogo(newColor) {
  return (
    <SvgIcon sx={{ color: newColor }}>
      <ThreeAmLogoSvg />
    </SvgIcon>
  );
}
