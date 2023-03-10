import { useEffect, useRef, useState } from 'react';

/**
 * 
 * TwitchEmbed
 * 
 * A component that renders a Twitch embedded video player.
 * The player is responsive and adjusts its height according to its width, keeping a 16:9 aspect ratio.
 * Currently hardcoded to Coqui's channel.
 * @returns {JSX.Element} An iframe embedded Twitch stream
*/
function TwitchEmbed() {
  const [width, setWidth] = useState(0);
  const playerRef = useRef(null);

  // Effect to set the width of the player and update it on resize
  useEffect(() => {
    const player = playerRef.current;
    const updateSize = () => {
      const newWidth = player.clientWidth;
      setWidth(newWidth);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const height = Math.ceil(width * 0.5625);
  
  return (
    <iframe
      ref={playerRef}
      title='livestream'
      src={"https://player.twitch.tv/?channel=coqui&parent=coqui.monster coqui-monster.netlify.app localhost&muted=true"}
      height={height}
      width="100%"
      allowFullScreen
    />
  );
}

export default TwitchEmbed;