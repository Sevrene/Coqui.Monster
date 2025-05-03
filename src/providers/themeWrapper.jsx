'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function ThemeWrapper({ themeConfig, children }) {
  const baseTheme = createTheme();

  if (!themeConfig)
    return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main:
          themeConfig.colors?.primary?.color || baseTheme.palette.primary.main,
      },
      secondary: {
        main:
          themeConfig.colors?.secondary?.color ||
          baseTheme.palette.secondary.main,
      },
      ...(themeConfig.colors?.links?.color && {
        link: baseTheme.palette.augmentColor({
          name: 'link',
          color: {
            main: themeConfig.colors.links.color,
          },
        }),
      }),
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
