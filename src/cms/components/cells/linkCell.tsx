import Link from 'next/link';

type LinkCellProps = {
  cellData: string;
};

//
export default function LinkCell({ cellData }: LinkCellProps) {
  if (!cellData) {
    return <></>;
  }

  return (
    <Link href={cellData} target='_blank' rel='noopener noreferrer'>
      {cellData}
    </Link>
  );
}
