import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { Providers } from '@/components/providers/providers';

/**
 * Root layout component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactNode} The rendered root layout.
 */
export default function RootLayout({ children }) {
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
        {children}
        <Footer />
      </Providers>
    </body>
  );
}
