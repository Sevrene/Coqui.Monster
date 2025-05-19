export const dynamic = 'force-static';

import type { Metadata, Viewport } from 'next';

import { Footer } from '@/components/layout/footer/footer';
import { Header } from '@/components/layout/header/header';
import { Providers } from '@/providers/providers';
import { constStyles } from '@/styles/constStyles';
import { GlobalStyles } from '@mui/material';
import { ReactNode } from 'react';
import { RefreshRouteOnSave } from './(frontend)/RefreshRouteOnSave';

// TODO: Tie metadata and GlobalStyles to CMS data

const baseURL: string =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://coqui.monster';
const description: string =
  'Berry Crepe is an octopus vtuber who streams on Twitch. She is also stinky.';
const themeColor: string = constStyles.brandPurple;

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: {
    template: 'BERRY',
    default: 'BERRY',
  },
  applicationName: 'berry.crepe',
  description,
  keywords: ['berry, vtuber, twitch, streamer, octopus'],
  creator: 'Sevrene, sevrene.dev@outlook.com',
  openGraph: {
    title: 'BERRY',
    description,
    url: 'https://test-branch--coqui-monster.netlify.app/',
    siteName: 'test-branch',
    images: [
      {
        url: '/images/brand/shareImage.jpg',
        width: 800,
        height: 600,
        alt: 'Berry Thumbnail',
      },
    ],
    type: 'website',
  },
  twitter: {
    title: 'BERRY',
    description,
    images: [
      {
        url: '/images/brand/shareImage.jpg',
        width: 800,
        height: 600,
        alt: 'Berry Thumbnail',
      },
    ],
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
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
              background: 'linear-gradient(180deg, #C84854 0%, #000000 100%)',
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
        <RefreshRouteOnSave />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
