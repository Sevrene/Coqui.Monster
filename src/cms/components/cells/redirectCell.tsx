import { Redirect } from '@/payload-types';
import LinkCell from './linkCell';

type RedirectCellProps = {
  cellData: Redirect['to'];
};

export default async function RedirectCell({ cellData }: RedirectCellProps) {
  if (!cellData) {
    return <></>;
  }

  if (cellData.type === 'custom') {
    return <LinkCell cellData={cellData.url} />;
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
