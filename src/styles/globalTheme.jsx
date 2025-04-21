'use client';

import { createTheme } from '@mui/material/styles';

const createGlobalTheme = (themeData) => {
  const baseTheme = createTheme();

  if (!themeData) return baseTheme;

  return createTheme(baseTheme, {
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: themeData.primary,
          },
          secondary: {
            main: themeData.secondary,
          },
          link: baseTheme.palette.augmentColor({
            name: 'link',
            color: {
              main: themeData.link,
            },
          }),
        },
      },
      dark: {
        palette: {
          primary: {
            main: themeData.darkMode.primary,
          },
          secondary: {
            main: themeData.darkMode.secondary,
          },
          link: baseTheme.palette.augmentColor({
            name: 'link',
            color: {
              main: themeData.darkMode.link,
            },
          }),
        },
      },
    },
  });
};

export default createGlobalTheme;
