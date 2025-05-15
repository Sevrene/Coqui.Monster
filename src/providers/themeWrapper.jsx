'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function ThemeWrapper({ themeConfig, children }) {
  const baseTheme = createTheme();

  if (!themeConfig)
    return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;

  const primaryMain =
    themeConfig.colors?.primary?.color || baseTheme.palette.primary.main;
  const secondaryMain =
    themeConfig.colors?.secondary?.color || baseTheme.palette.secondary.main;
  const linkMain = themeConfig.colors?.links?.color;

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: primaryMain,
        main50: primaryMain + '50',
      },
      secondary: {
        main: secondaryMain,
        main50: secondaryMain + '50',
      },
      ...(themeConfig.colors?.links?.color && {
        link: baseTheme.palette.augmentColor({
          name: 'link',
          color: {
            main: linkMain,
            main50: linkMain + '50',
          },
        }),
      }),
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
