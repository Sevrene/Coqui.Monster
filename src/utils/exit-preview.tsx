'use client';

import { useSearchParams } from 'next/navigation';

// This flickers the page when exiting preview mode, but I can't find a way to avoid it
export function ExitPreview() {
  const nextSearchParams = useSearchParams();

  // Still previewing, so don't exit
  if (nextSearchParams && nextSearchParams.has('preview')) {
    return null;
  }

  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/next/exit-preview`);
}
