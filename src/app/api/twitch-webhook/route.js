import { NextResponse } from 'next/server';
import crypto from 'crypto';

const TWITCH_SECRET = process.env.TWITCH_SECRET;
const predefinedChannelId = '633385488';

export const cache = {
  live: false,
  lastUpdate: null,
};

const verifyTwitchSignature = async (body, headers, secret) => {
  const messageId = headers.get('twitch-eventsub-message-id');
  const timestamp = headers.get('twitch-eventsub-message-timestamp');
  const messageSignature = headers.get('twitch-eventsub-message-signature');

  const message = messageId + timestamp + body;
  const signature = crypto
    .createHmac('sha256', secret)
    .update(message)
    .digest('hex');

  const expectedSignatureHeader = `sha256=${signature}`;
  return expectedSignatureHeader === messageSignature;
};

/**
 * Handles the POST request for the Twitch webhook route.
 * Verifies the Twitch signature, updates the cache based on the event type,
 * and returns a JSON response.
 *
 * @param {Request} req - The request object.
 * @returns {Response} The JSON response.
 */
export async function POST(req) {
  const body = await req.text();

  if (!verifyTwitchSignature(body, req.headers, TWITCH_SECRET)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const event = body ? JSON.parse(body) : null;

  if (
    event.subscription.type === 'stream.online' &&
    event.event.broadcaster_user_id === predefinedChannelId
  ) {
    cache.live = true;
    cache.lastUpdate = new Date();
    console.log(`Channel ${predefinedChannelId} is live`);
  } else if (
    event.subscription.type === 'stream.offline' &&
    event.event.broadcaster_user_id === predefinedChannelId
  ) {
    cache.live = false;
    cache.lastUpdate = new Date();
    console.log(`Channel ${predefinedChannelId} is offline`);
  }

  return NextResponse.json({ status: 200, ok: true });
}
