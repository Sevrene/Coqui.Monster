type ColorPickerCellProps = {
  cellData: string | null | undefined;
};

// Adds preview of color to the cell
export default function ColorPickerCell({ cellData }: ColorPickerCellProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '4px' }}>
      <div
        style={{
          width: '20px',
          height: '20px',
          background: cellData || 'transparent',
          border: '1px solid #000',
        }}
      />
      <p style={{ marginLeft: '8px' }}>{cellData}</p>
    </div>
  );
}
