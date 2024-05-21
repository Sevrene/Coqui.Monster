import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Providers } from '@/components/providers/providers';
import { Typography } from '@mui/material';

const messages = [
  'This is not the page you are looking for.',
  'Nothing to see here.',
  'Move along.',
  'You seem lost.',
];

/**
 * Renders the NotFound component.
 * @returns {JSX.Element} The rendered NotFound component.
 */
export default function NotFound() {
  return (
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <a
        href='#main'
        style={{
          position: 'absolute',
          top: '-40px',
          left: 0,
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
        }}
      >
        Skip to main content
      </a>
      <Providers>
        <Header />
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            marginTop: '64px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            style={{ fontSize: '3rem', textAlign: 'center', color: 'white' }}
          >
            {messages[Math.floor(Math.random() * messages.length)]}
          </Typography>
        </main>
        <Footer />
      </Providers>
    </body>
  );
}
