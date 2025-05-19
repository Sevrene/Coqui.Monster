import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

// This layout only exists for the custom 404 page, but is applied to all pages so is kept minimal
export default function RootLayout({ children }: RootLayoutProps) {
  return <>{children}</>;
}
