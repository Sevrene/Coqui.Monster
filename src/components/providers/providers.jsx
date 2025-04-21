import { getGlobal } from '@/utils/getGlobals';
import { GlobalStyles } from '@mui/material';
import { Contexts } from './contexts';
import ThemeWrapper from './themeWrapper';

/**
 * Renders a set of providers for the application.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @returns {ReactNode} The rendered providers with the child components.
 */
export async function Providers({ children }) {
  const themeData = await getGlobal('theme', 1);

  return (
    <ThemeWrapper themeConfig={themeData}>
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
            background: 'linear-gradient(180deg, #6600CC 0%, #000000 100%)',
          },
        }}
      />
      <Contexts>{children}</Contexts>
    </ThemeWrapper>
  );
}
