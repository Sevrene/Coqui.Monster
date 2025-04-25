import { Redirect } from '@/payload-types';

type RedirectCellProps = {
  cellData: Redirect['to'];
};

//
export default async function RedirectCell({ cellData }: RedirectCellProps) {
  if (!cellData) {
    return <></>;
  }

  if (cellData.type === 'custom') {
    return (
      <a href={cellData.url} target='_blank' rel='noopener noreferrer'>
        {cellData.url}
      </a>
    );
  }

  if (cellData.type === 'reference') {
    return (
      <a
        href={cellData.reference.relationTo}
        target='_blank'
        rel='noopener noreferrer'
      >
        {cellData.reference.relationTo}
      </a>
    );
  }

  return <></>;
}
