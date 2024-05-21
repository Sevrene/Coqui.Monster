'use client';

import { constStyles } from './constStyles';
import { createTheme } from '@mui/material/styles';

const { palette } = createTheme();
/**
 * Global theme object.
 *
 * @type {import('@mui/material').Theme}
 */
const globalTheme = createTheme({
  palette: {
    mode: 'dark',
    brandPurple: palette.augmentColor({
      color: {
        main: constStyles.brandPurple, // Purple
      },
    }),
    brandYellow: palette.augmentColor({
      color: {
        main: constStyles.brandYellow, // 3AM Yellow
      },
    }),
    brand3AM: palette.augmentColor({
      color: {
        main: constStyles.brand3AM, // 3AM Purple
      },
    }),
    brandAccent: palette.augmentColor({
      color: {
        main: constStyles.brandAccent, // Accent
      },
    }),
  },
});

export default globalTheme;
