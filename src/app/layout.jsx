import { constStyles } from '@/styles/constStyles';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://coqui.monster';
const description =
  'Coqui Saporana is a frog vtuber who streams on Twitch. She is also a member of the 3AM VTuber group.';
const themeColor = constStyles.brandPurple;

/**
 * Metadata object containing information about the application.
 * @typedef {Object} Metadata
 * @property {Object} title - Object containing title information.
 * @property {string} title.template - Template for the title.
 * @property {string} title.default - Default value for the title.
 * @property {string} applicationName - Name of the application.
 * @property {string} description - Description of the application.
 * @property {string[]} keywords - Array of keywords related to the application.
 * @property {string} metadataBase - Base URL for metadata.
 * @property {string} author - Author of the application.
 * @property {string} creator - Creator of the application.
 * @property {Object} openGraph - Object containing Open Graph information.
 * @property {string} openGraph.title - Title for Open Graph.
 * @property {string} openGraph.description - Description for Open Graph.
 * @property {string} openGraph.url - URL for Open Graph.
 * @property {string} openGraph.siteName - Site name for Open Graph.
 * @property {Object[]} openGraph.images - Array of images for Open Graph.
 * @property {string} openGraph.images.url - URL of the image.
 * @property {number} openGraph.images.width - Width of the image.
 * @property {number} openGraph.images.height - Height of the image.
 * @property {string} openGraph.images.alt - Alt text for the image.
 * @property {string} openGraph.type - Type of the Open Graph.
 * @property {string} openGraph.color - Color for Open Graph.
 * @property {Object} twitter - Object containing Twitter information.
 * @property {string} twitter.title - Title for Twitter.
 * @property {string} twitter.description - Description for Twitter.
 * @property {Object} twitter.image - Image object for Twitter.
 * @property {string} twitter.image.url - URL of the image.
 * @property {number} twitter.image.width - Width of the image.
 * @property {number} twitter.image.height - Height of the image.
 * @property {string} twitter.image.alt - Alt text for the image.
 * @property {string} twitter.card - Card type for Twitter.
 * @property {string} twitter.color - Color for Twitter.
 */
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

/**
 * Represents the viewport configuration.
 * @typedef {Object} Viewport
 * @property {string} themeColor - The theme color of the viewport.
 * @property {string} width - The width of the viewport.
 * @property {number} initialScale - The initial scale of the viewport.
 * @property {number} maximumScale - The maximum scale of the viewport.
 */
export const viewport = {
  themeColor: themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
};

/**
 * Root layout component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered root layout.
 */
export default function RootLayout({ children }) {
  return <html lang='en'>{children}</html>;
}
