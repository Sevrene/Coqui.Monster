import { Homepage } from '@/payload-types'; // Adjust import path if necessary

interface RowLabelTitleProps {
  data: Homepage;
  rowNumber: number;
  rowLabel?: string;
  arrayKey: keyof Homepage;
}

export const RowLabelTitle = ({
  data,
  rowNumber,
  rowLabel: defaultLabel,
  arrayKey,
}: RowLabelTitleProps) => {
  const array = data[arrayKey];
  const label = array?.[rowNumber - 1]?.label;
  return label ?? defaultLabel ?? `Row ${rowNumber}`;
};

export default RowLabelTitle;
