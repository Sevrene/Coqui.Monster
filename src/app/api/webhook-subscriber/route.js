// TODO: Properly make this a webhook subscriber

import { NextResponse } from 'next/server';

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;
const webhookUrl = process.env.TWITCH_WEBHOOK_URL;
const channelId = '633385488';

const getAccessToken = async () => {
  const response = await fetch(`https://id.twitch.tv/oauth2/token`, {
    method: 'POST',
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    }),
  });

  const data = await response.json();
  return data.access_token;
};

/**
 * Subscribes to a Twitch event using the Twitch API.
 *
 * @param {string} type - The type of event to subscribe to.
 * @param {string} accessToken - The access token for authentication.
 * @returns {Promise<Object>} - A promise that resolves to the response data from the API.
 */
const subscribeToEvent = async (type, accessToken) => {
  const response = await fetch(
    'https://api.twitch.tv/helix/eventsub/subscriptions',
    {
      method: 'POST',
      headers: {
        'Client-ID': clientId,
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type,
        version: '1',
        condition: {
          broadcaster_user_id: channelId,
        },
        transport: {
          method: 'webhook',
          callback: webhookUrl,
          secret: process.env.TWITCH_SECRET,
        },
      }),
    }
  );

  const data = await response.json();

  console.log(`Subscribing to event ${type}`);
  console.log(data);

  return data;
};

export async function GET() {
  try {
    const accessToken = await getAccessToken();
    await subscribeToEvent('stream.online', accessToken);
    await subscribeToEvent('stream.offline', accessToken);

    return NextResponse.json({ message: 'Subscription successful' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Subscription failed', details: error.message },
      500
    );
  }
}
