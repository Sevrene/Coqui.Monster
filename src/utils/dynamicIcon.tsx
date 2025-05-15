import { SvgIcon } from '@mui/material';
import dynamic from 'next/dynamic';
import ThreeAmLogoSvg from '/public/images/brand/logo/3amLogo.svg';

type DynamicIconProps = {
  name: string;
};

export const DynamicIcon = ({ name }: DynamicIconProps) => {
  if (name === '3amLogo') {
    return (
      <SvgIcon>
        <ThreeAmLogoSvg />
      </SvgIcon>
    );
  }

  const Icon = dynamic(() =>
    import(`@tabler/icons-react`).then((mod) => mod[`Icon${name}`])
  );

  return <Icon />;
};
