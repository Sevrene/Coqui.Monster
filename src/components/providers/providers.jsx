import { GlobalStyles, ThemeProvider } from '@mui/material';

import { Contexts } from './contexts';
import { formatBackgroundStyle } from '@/utils/styleUtils';
import globalTheme from '@/styles/globalTheme';
import { mainPageBackground } from '@/mockData';

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
          html: {
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            margin: 0,
            background: formatBackgroundStyle(mainPageBackground),
          },
        }}
      />
      <Contexts>{children}</Contexts>
    </ThemeProvider>
  );
}
