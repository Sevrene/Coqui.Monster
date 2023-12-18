import { NextResponse } from 'next/server';

const cacheTime = 10 * 60 * 1000; // 10 minutes

// Twitch API credentials
const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

let accessToken = null;
let tokenExpiration = null;
let liveStatuses = null;
let lastFetchTime = null;

/**
 * Handles GET requests to fetch the live status of Twitch channels.
 * @param {import('next/server').NextRequest} nextReq - The incoming request.
 * @returns {Promise<import('next/server').NextResponse>} The response with the live status of the channels.
 */
export async function GET(nextReq) {
  let channelNames = nextReq.nextUrl.searchParams.get('channels');
  channelNames = channelNames.split(',');

  // Return null if the Twitch API credentials are undefined
  if (!clientId || !clientSecret) {
    return NextResponse.json({
      error: 'Missing clientId or clientSecret',
      status: 400,
    });
  }

  // Return the cached live status data if it's less than 5 minutes old
  if (liveStatuses && lastFetchTime && Date.now() - lastFetchTime < cacheTime) {
    return NextResponse.json(liveStatuses, { status: 200 });
  }

  try {
    // Refresh the access token if it's null or has expired
    if (!accessToken || Date.now() >= tokenExpiration) {
      const tokenData = await refreshTwitchAccessToken();
      accessToken = tokenData.accessToken;
      tokenExpiration = Date.now() + tokenData.expiresIn * 1000;
    }

    // Fetch the live status of all channel from the Twitch API
    const response = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=${channelNames.join(
        '&user_login='
      )}`,
      {
        headers: {
          'Client-ID': clientId,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();

    // Create an object with the live status of each channel
    liveStatuses = {};
    for (const channelName of channelNames) {
      const isLive = data.data.some(
        (stream) => stream.user_login === channelName
      );
      liveStatuses[channelName] = { live: isLive };
    }

    lastFetchTime = Date.now();

    return NextResponse.json(liveStatuses, { status: 200 });
  } catch (error) {
    console.error(`Failed to fetch Twitch status for ${channelNames}:`, error);
  }
}

/**
 * Refreshes the Twitch access token using the client credentials flow.
 * @returns {Promise<{accessToken: string, expiresIn: number}>} The new access token and its expiration time.
 */
async function refreshTwitchAccessToken() {
  try {
    const response = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });

    // Parse the response data and update the access token and expiration time
    const data = await response.json();
    if (response.ok) {
      accessToken = data.access_token;
      tokenExpiration = Date.now() + data.expires_in * 1000;
      return { accessToken, expiresIn: data.expires_in };
    } else {
      throw new Error(data.message || 'Failed to refresh Twitch access token');
    }
  } catch (error) {
    console.error('Failed to acquire Twitch access token:', error);
  }
}
