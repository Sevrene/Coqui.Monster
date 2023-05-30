const fetchTwitchLiveStatus = async (channelName) => {
  try {
    const response = await fetch(`https://api.twitch.tv/helix/streams?user_login=${channelName}`, {
      headers: {
        'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
      },
    });
    
    const data = await response.json();
    return data.data.length > 0;
  } catch (error) {
    console.error('Error fetching Twitch stream status:', error);
    return false;
  }
};

export default fetchTwitchLiveStatus;