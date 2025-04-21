export const dynamic = 'force-static';

import { ParsedHeaderData, getHeaderData } from '@/cms_data/headerData';

import { Footer } from '@/components/layout/footer/footer';
import { Header } from '@/components/layout/header/header';
import { Providers } from '@/components/providers/providers';
import { constStyles } from '@/styles/constStyles';
import { ExitPreview } from '@/utils/exit-preview';
import { draftMode } from 'next/headers';
import { ReactNode } from 'react';
import { RefreshRouteOnSave } from './RefreshRouteOnSave';

const baseURL: string =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://coqui.monster';
const description: string =
  'Coqui Saporana is a frog vtuber who streams on Twitch. She is also a member of the 3AM VTuber group.';
const themeColor: string = constStyles.brandPurple;

interface IMetaOpenGraphImage {
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
  images: IMetaOpenGraphImage[];
  type: string;
  color: string;
}

interface IMetaTwitterImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface IMetaTwitter {
  title: string;
  description: string;
  image: IMetaTwitterImage;
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
  author: string;
  creator: string;
  openGraph: IMetaOpenGraph;
  twitter: IMetaTwitter;
}

export const metadata: Metadata = {
  title: {
    template: 'COQUI',
    default: 'COQUI',
  },
  applicationName: 'coqui.monster',
  description,
  keywords: [
    'coqui, vtuber, 3AM, southside, south side, twitch, streamer, frog, coqui monster, c0qui',
  ],
  metadataBase: baseURL,
  author: 'Sevrene, sevrene.dev@outlook.com',
  creator: 'Sevrene, sevrene.dev@outlook.com',
  openGraph: {
    title: 'COQUI',
    description,
    url: 'https://coqui.monster',
    siteName: 'coqui.monster',
    images: [
      {
        url: `${baseURL}/images/brand/shareImage.jpg`,
        width: 800,
        height: 600,
        alt: 'COQUI Thumbnail',
      },
    ],
    type: 'website',
    color: themeColor,
  },
  twitter: {
    title: 'COQUI',
    description,
    image: {
      url: `${baseURL}/images/brand/shareImage.jpg`,
      width: 800,
      height: 600,
      alt: 'COQUI Thumbnail',
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
  const headerData: ParsedHeaderData = await getHeaderData();
  const draft = await draftMode();

  return (
    <html lang='en'>
      <body>
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
          <Header headerData={headerData} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
