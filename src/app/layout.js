import '../index.css';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://coqui.monster';
const faviconBase = `${baseURL}/images/brand/logo`;
const description =
  'Coqui Saporana is a frog vtuber who streams on Twitch. She is also a member of the 3AM VTuber group.';
const themeColor = '#6600CC';

export const metadata = {
  title: {
    template: 'COQUI',
    default: 'COQUI',
  },
  applicationName: 'coqui.monster',
  description: description,
  keywords: [
    'coqui, vtuber, southside, south side, twitch, streamer, frog, coqui monster, c0qui',
  ],
  themeColor: themeColor,
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
        url: `${baseURL}/images/thumbnail.jpg`,
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
      url: `${baseURL}/images/thumbnail.jpg`,
      width: 800,
      height: 600,
      alt: 'COQUI Thumbnail',
    },
    card: 'summary_large_image',
    color: themeColor,
  },

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 2,
  },
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
        {children}
      </body>
    </html>
  );
}
