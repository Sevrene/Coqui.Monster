import { GlobalStyles, ThemeProvider } from '@mui/material';

import { Contexts } from './contexts';
import { fullWindow } from '@/styles/globalStyles';
import globalTheme from '@/styles/globalTheme';

/**
 * Renders a set of providers for the application.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @returns {ReactNode} The rendered providers with the child components.
 */
export function Providers({ children }) {
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles
        styles={{
          html: fullWindow,
          body: fullWindow,
        }}
      />
      <Contexts>{children}</Contexts>
    </ThemeProvider>
  );
}
