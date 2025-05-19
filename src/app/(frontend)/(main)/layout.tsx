export const dynamic = 'force-static';

import { Footer } from '@/components/layout/footer/footer';
import { Header } from '@/components/layout/header/header';
import { Providers } from '@/providers/providers';
import { constStyles } from '@/styles/constStyles';
import { ExitPreview } from '@/utils/exit-preview';
import { GlobalStyles } from '@mui/material';
import { draftMode } from 'next/headers';
import { ReactNode } from 'react';
import { RefreshRouteOnSave } from '../RefreshRouteOnSave';

// TODO: Tie metadata and GlobalStyles to CMS data

const baseURL: string =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://coqui.monster';
const description: string =
  'Berry Crepe is an octopus vtuber who streams on Twitch. She is also stinky.';
const themeColor: string = constStyles.brandPurple;

interface IMetaImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface IMetaOpenGraph {
  title: string;
  description: string;
  url: string;
  siteName: string;
  images: IMetaImage[];
  type: string;
  color: string;
}

interface IMetaTwitter {
  title: string;
  description: string;
  image: IMetaImage;
  card: string;
  color: string;
}

interface Metadata {
  title: {
    template: string;
    default: string;
  };
  applicationName: string;
  description: string;
  keywords: string[];
  metadataBase: string;
  alternates: {
    canonical: string;
  };
  author: string;
  creator: string;
  openGraph: IMetaOpenGraph;
  twitter: IMetaTwitter;
}

export const metadata: Metadata = {
  title: {
    template: 'BERRY',
    default: 'BERRY',
  },
  applicationName: 'berry.crepe',
  description,
  keywords: ['berry, vtuber, twitch, streamer, octopus'],
  metadataBase: baseURL,
  alternates: {
    canonical: '/',
  },
  author: 'Sevrene, sevrene.dev@outlook.com',
  creator: 'Sevrene, sevrene.dev@outlook.com',
  openGraph: {
    title: 'BERRY',
    description,
    url: 'https://test-branch--coqui-monster.netlify.app/',
    siteName: 'test-branch',
    images: [
      {
        url: `${baseURL}/images/brand/shareImage.jpg`,
        width: 800,
        height: 600,
        alt: 'Berry Thumbnail',
      },
    ],
    type: 'website',
    color: themeColor,
  },
  twitter: {
    title: 'BERRY',
    description,
    image: {
      url: `${baseURL}/images/brand/shareImage.jpg`,
      width: 800,
      height: 600,
      alt: 'Berry Thumbnail',
    },
    card: 'summary_large_image',
    color: themeColor,
  },
};

interface IViewport {
  themeColor: string;
  width: string;
  initialScale: number;
  maximumScale: number;
}

export const viewport: IViewport = {
  themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({
  children,
}: RootLayoutProps): Promise<ReactNode> {
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
        {draft.isEnabled && <ExitPreview />}
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
