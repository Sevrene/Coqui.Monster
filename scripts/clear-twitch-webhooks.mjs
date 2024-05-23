import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: '.env.development.local' });

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

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
 * @param {string} accessToken - The access token for authentication.
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
 * Clears all Twitch webhooks subscriptions.
 * @returns {Promise<void>} A promise that resolves when all webhooks subscriptions are cleared.
 */
const clearWebhooks = async () => {
  try {
    const accessToken = await getAccessToken();
    const currentSubscriptions = await checkSubscriptions(accessToken);

    const ids = currentSubscriptions.data.map((sub) => sub.id);

    for (const id of ids) {
      const removeAll = await fetch(
        'https://api.twitch.tv/helix/eventsub/subscriptions',
        {
          method: 'DELETE',
          headers: {
            'Client-ID': clientId,
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id,
          }),
        }
      );
    }
  } catch (error) {
    console.error({ error: 'Subscription failed', details: error.message });
  }
};

clearWebhooks();
