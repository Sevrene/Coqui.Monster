export const dynamic = 'force-static';

import { GlobalStyles } from '@mui/material';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({
  children,
}: RootLayoutProps): Promise<ReactNode> {
  return (
    <html lang='en'>
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
      <body>{children}</body>
    </html>
  );
}
