'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function ThemeWrapper({ themeConfig, children }) {
  const baseTheme = createTheme();

  if (!themeConfig)
    return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;

  const theme = createTheme({
    colorSchemes: {
      light: {
        palette: {
          mode: 'light',
          primary: {
            main:
              themeConfig.colors.primary?.color ||
              baseTheme.palette.primary.main,
          },
          secondary: {
            main:
              themeConfig.colors.secondary?.color ||
              baseTheme.palette.secondary.main,
          },
          link: baseTheme.palette.augmentColor({
            name: 'link',
            color: {
              main: themeConfig.colors.links?.color || '#000',
            },
          }),
        },
      },
      ...(themeConfig.darkModeEnabled && {
        dark: {
          palette: {
            mode: 'dark',
            primary: {
              main: themeConfig.colors.darkMode.primary.color,
            },
            secondary: {
              main: themeConfig.colors.darkMode.secondary.color,
            },
            link: baseTheme.palette.augmentColor({
              name: 'link',
              color: {
                main: themeConfig.colors.darkMode.links.color || '#000',
              },
            }),
          },
        },
      }),
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
