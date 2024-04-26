'use client';

import { useComedy } from './comedy';

/**
 * A wrapper component for comedy content.
 */
export default function ComedyWrapper() {
  useComedy('comedy', 'comedy.png');
}
