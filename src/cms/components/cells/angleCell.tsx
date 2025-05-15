type AngleCellProps = {
  cellData: number | null | undefined;
};

export default function AngleCell({ cellData }: AngleCellProps) {
  // Infer a direction from the angle
  const directions = [
    'North',
    'North-East',
    'East',
    'South-East',
    'South',
    'South-West',
    'West',
    'North-West',
  ];
  const angle = cellData ?? 0;
  const index = Math.round(angle / 45) % 8; // 360 / 8 = 45 degrees
  const direction = directions[index];
  return (
    <>
      {cellData} ({direction})
    </>
  );
}
