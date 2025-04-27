import SocialIcon from '@/components/sections/socials/socialIcon';
import { Social } from '@/payload-types';

type IconCellProps = {
  cellData: Social['appearance'];
  rowData: {
    name: string;
  };
};

export default function IconCell({ cellData, rowData }: IconCellProps) {
  if (!cellData) {
    return <></>;
  }

  return (
    <SocialIcon
      social={{
        name: rowData.name,
        url: null,
        appearance: {
          color: cellData.color,
          icon: cellData.icon,
        },
      }}
    />
  );
}
