import { getGlobal } from '@/utils/getGlobals';
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
      <Contexts>{children}</Contexts>
    </ThemeWrapper>
  );
}
