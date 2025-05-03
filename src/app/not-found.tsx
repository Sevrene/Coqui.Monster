import { GlobalStyles, Typography } from '@mui/material';

import { ExitPreview } from '@/utils/exit-preview';
import { Footer } from '@/components/layout/footer/footer';
import { Header } from '@/components/layout/header/header';
import { ReactNode } from 'react';
import { draftMode } from 'next/headers';

const messages = [
  '404: Page not found',
  <>
    You found Tad&apos;s Secret Stash!
    <br />
    Unfortunately he doesn&apos;t own a stash yet
  </>,
  'You seem more lost than Coqui in a hallway',
];

export default async function NotFound(): Promise<ReactNode> {
  const draft = await draftMode();

  return (
    <html lang='en'>
      <body>
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
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <a
          href='#main'
          style={{
            position: 'absolute',
            top: '40px',
            left: 0,
            width: '1px',
            height: '1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
          }}
        >
          Skip to main content
        </a>
        {draft.isEnabled && <ExitPreview />}
        <Header />
        <main
          id='main'
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            marginTop: '96px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              maxWidth: { xs: '90%', md: '80%', lg: '900px' },
              fontSize: { xs: '1rem', sm: '2rem', lg: '3rem' },
              textAlign: 'center',
              color: 'white',
            }}
          >
            {messages[Math.floor(Math.random() * messages.length)]}
          </Typography>
        </main>
        <Footer hideRedirectsFab />
      </body>
    </html>
  );
}
