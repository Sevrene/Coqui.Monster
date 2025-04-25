import { Color } from '@/payload-types';
import { Payload } from 'payload';

type GradientCellProps = {
  payload: Payload;
  cellData: {
    length: number;
  };
  rowData: {
    id: string;
    angle?: number;
  };
};

type FullGradientDataType = {
  angle?: number;
  colors?: {
    color: Color | number;
    position: number;
    transparency?: number | null;
  }[];
};

// Adds preview of gradient to the cell
export default async function GradientCell({
  payload,
  cellData,
  rowData,
}: GradientCellProps) {
  const fullGradientData: FullGradientDataType = await payload.findByID({
    collection: 'gradients',
    id: rowData?.id,
    depth: 1,
  });

  const hexValues =
    fullGradientData?.colors.map((colorObj) => {
      const baseColor = (colorObj.color as Color).color;
      const position = colorObj.position ? ` ${colorObj.position}%` : '';
      const formattedTransparency =
        colorObj.transparency?.toString().padStart(2, '0') ?? '';

      return `${baseColor}${formattedTransparency}${position}`;
    }) || [];

  const gradient = `linear-gradient(${
    rowData?.angle || 0
  }deg, ${hexValues.join(', ')})`;

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '4px' }}>
      <div
        style={{
          width: '20px',
          height: '20px',
          background: gradient || 'transparent',
          border: '1px solid #000',
        }}
      />
      <p style={{ marginLeft: '8px' }}>{cellData.length} Colors</p>
    </div>
  );
}
