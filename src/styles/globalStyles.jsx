import { formatBackgroundStyle } from '@/utils/styleUtils';
import { mainPageBackground } from '@/mockData';

/**
 * Represents the global styles for the application.
 * @type {Object}
 */
export const fullWindow = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  margin: 0,
  background: formatBackgroundStyle(mainPageBackground),
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
};
