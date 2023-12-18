'use client';

import { useEffect, useState } from 'react';

const messages = [
  'This is not the page you are looking for.',
  'Nothing to see here.',
  'Move along.',
  'You seem lost.',
];

const message = messages[Math.floor(Math.random() * messages.length)];

/**
 * The NotFound component is rendered when the user navigates to a page that does not exist.
 * It displays a message indicating that the requested page was not found.
 *
 * @returns {ReactNode} The rendered NotFound component.
 */
export default function NotFound() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div
        as='main'
        id='main'
        mt={{ base: '0', md: '64px' }}
        flexDir='column'
        flexGrow='1'
        alignItems='center'
        position='relative'
      >
        <div w='80%'>
          <div fontSize={{ base: '2xl', sm: '4xl' }} textAlign='center'>
            {isClient ? `404: ${message}` : '404 - Page Not Found'}
          </div>
        </div>
      </div>
    </>
  );
}
