import React  from 'react';
import { useEffect, useRef, useState } from 'react';

function TwitchData() {
  const [width, setWidth] = useState(0);
  const playerRef = useRef(null);

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

  const host = window.location.hostname === "localhost" ? "localhost" : "coqui-monster.netlify.app";

  return (
    <iframe
      ref={playerRef}
      title='livestream'
      src={"https://player.twitch.tv/?channel=coqui&parent=" + host + "&muted=true"}
      height={height}
      width="100%"
      allowFullScreen
    />
  );
}

export default TwitchData;