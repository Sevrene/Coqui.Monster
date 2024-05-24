import { NextResponse } from 'next/server';
import { cache } from '@/app/cache/live-status';

/**
 * Retrieves the live status and last update from the cache.
 * @returns {Object} An object containing the live status and last update.
 */
export function GET() {
  return NextResponse.json({
    live: cache.live,
    lastUpdate: cache.lastUpdate,
  });
}
