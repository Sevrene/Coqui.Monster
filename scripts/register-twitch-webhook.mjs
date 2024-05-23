import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: '.env.development.local' });

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;
const webhookUrl = process.env.TWITCH_WEBHOOK_URL;
const channelId = process.env.TWITCH_CHANNEL_ID;

/**
 * Retrieves the access token from Twitch API using client credentials.
 * @returns {Promise<string>} The access token.
 */
const getAccessToken = async () => {
  const response = await fetch('https://id.twitch.tv/oauth2/token', {
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
 * Fetches the subscriptions from the Twitch API.
 * @param {string} accessToken - The access token for authorization.
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 */
const checkSubscriptions = async (accessToken) => {
  const response = await fetch(
    'https://api.twitch.tv/helix/eventsub/subscriptions',
    {
      method: 'GET',
      headers: {
        'Client-ID': clientId,
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  return data;
};

/**
 * Subscribes to a Twitch event.
 *
 * @param {string} type - The type of event to subscribe to.
 * @param {string} accessToken - The access token for authentication.
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 */
const subscribeToEvent = async (type, accessToken) => {
  console.log(`Subscribing to event ${type}`);

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
  return data;
};

/**
 * Registers a webhook for Twitch events.
 * @returns {Promise<void>} A promise that resolves when the webhook registration is complete.
 */
const registerWebhook = async () => {
  try {
    const accessToken = await getAccessToken();
    const currentSubscriptions = await checkSubscriptions(accessToken);

    // Only subscribe to the events if the subscription does not exist
    if (
      !currentSubscriptions.data.some(
        (sub) => sub.type === 'stream.online' && sub.status === 'enabled'
      )
    ) {
      await subscribeToEvent('stream.online', accessToken);
    }

    // Only subscribe to the events if the subscription does not exist
    if (
      !currentSubscriptions.data.some(
        (sub) => sub.type === 'stream.offline' && sub.status === 'enabled'
      )
    ) {
      await subscribeToEvent('stream.offline', accessToken);
    }
  } catch (error) {
    console.error({ error: 'Subscription failed', details: error.message });
  }
};

registerWebhook();
