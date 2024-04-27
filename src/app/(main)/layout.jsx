import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Providers } from '@/components/providers';
import { constStyles } from '@/styles/constStyles';

//const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://coqui.monster';
const baseURL =
  'https://potential-space-computing-machine-v5xr6jqpgqfpr54-3000.app.github.dev';
const faviconBase = `${baseURL}/images/brand/logo`;
const description =
  'Coqui Saporana is a frog vtuber who streams on Twitch. She is also a member of the 3AM VTuber group.';
const themeColor = constStyles.brandPurple;

export const metadata = {
  title: {
    template: 'COQUI',
    default: 'COQUI',
  },
  applicationName: 'coqui.monster',
  description: description,
  keywords: [
    'coqui, vtuber, 3AM, southside, south side, twitch, streamer, frog, coqui monster, c0qui',
  ],
  metadataBase: baseURL,
  author: 'Sevrene, sevrene.dev@outlook.com',
  creator: 'Sevrene, sevrene.dev@outlook.com',

  openGraph: {
    title: 'COQUI',
    description: description,
    url: 'https://coqui.monster',
    siteName: 'coqui.monster',
    images: [
      {
        url: `${baseURL}/images/brand/shareImage.jpg`, // TODO: Check this
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
    description: description,
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

export const viewport = {
  themeColor: themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
};

/**
 * The RootLayout component is a wrapper component that provides a basic HTML structure for the application.
 * It renders the Providers component, which provides context and state to the rest of the application.
 *
 * @param {ReactNode} children - The child elements to render inside the RootLayout.
 * @returns {ReactNode} The rendered RootLayout component.
 */
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <link
          rel='icon'
          href={`${faviconBase}/favicon.jpg`}
          sizes='16x16 32x32 64x64'
          type='image/jpg'
        />
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
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
