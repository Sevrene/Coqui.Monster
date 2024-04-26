import MenuButton from './MenuButton';
import { Stack } from '@mui/material';

export default function ResponsiveMenu({
  menuData: { items = [], settings = {} },
}) {
  const buttonSettings = settings.buttonSettings ?? {};

  return (
    <Stack direction='row' spacing={settings.spacing ?? 2}>
      {items.map((item, index) => (
        <MenuButton
          key={index}
          item={{
            content: item.content,
            settings: { buttonSettings },
          }}
        />
      ))}
    </Stack>
  );
}
