import { NextResponse } from 'next/server';
import { cache } from '@/app/cache/live-status';
import crypto from 'crypto';

const TWITCH_SECRET = process.env.TWITCH_SECRET;
const channelId = process.env.TWITCH_CHANNEL_ID;
const MESSAGE_TYPE_VERIFICATION = 'webhook_callback_verification';

/**
 * Verifies the Twitch signature of a webhook request.
 * @param {string} body - The body of the webhook request.
 * @param {Headers} headers - The headers of the webhook request.
 * @param {string} secret - The secret used to generate the signature.
 * @returns {Promise<boolean>} - A promise that resolves to true if the signature is valid, false otherwise.
 */
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

  if (
    req.headers.get('twitch-eventsub-message-type') ===
    MESSAGE_TYPE_VERIFICATION
  ) {
    const challenge = JSON.parse(body).challenge;

    return new NextResponse(challenge, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  const event = body ? JSON.parse(body) : null;

  if (
    event.subscription.type === 'stream.online' &&
    event.subscription.status === 'enabled' &&
    event.event.broadcaster_user_id === channelId
  ) {
    cache.live = true;
    cache.lastUpdate = new Date();
    console.log('Stream is live!');
  } else if (
    event.subscription.type === 'stream.offline' &&
    event.subscription.status === 'enabled' &&
    event.event.broadcaster_user_id === channelId
  ) {
    cache.live = false;
    cache.lastUpdate = new Date();
    console.log('Stream is offline!');
  } else {
    console.log(
      'Error updating cache: Invalid event type or broadcaster ID: ',
      event
    );
  }

  return new NextResponse({ status: 200 });
}
