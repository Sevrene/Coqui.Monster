'use client';

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react';
import { useRouter } from 'next/navigation.js';
import React from 'react';

// This uses the Payload Live Preview package to refresh the route when saving changes in Payload CMS
export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter();
  return (
    <PayloadLivePreview
      refresh={router.refresh}
      serverURL={process.env.NEXT_PUBLIC_PAYLOAD_URL}
    />
  );
};
