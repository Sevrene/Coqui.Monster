import { useEffect, useRef, useState } from "react";

/**
  TwitchEmbed Component

  Renders a Twitch embedded video player with a responsive width and a 16:9 aspect ratio.
  @param {object} props - The props for the component.
    @param {string} channel - The Twitch channel name to be displayed
  @returns {JSX.Element} - An iframe embedded Twitch stream
*/
function TwitchEmbed(props) {
  const [width, setWidth] = useState(0);
  const playerRef = useRef(null);

  // Set the width of the player and update it on resize
  useEffect(() => {
    const player = playerRef.current;
    const updateSize = () => {
      const newWidth = player.clientWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // Calculate the height based on the width based on 1920x1080 ratio
  // 1920 x 0.5625 = 1080
  const height = Math.ceil(width * 0.5625);

  return (
    <iframe
      ref={playerRef}
      title="livestream"
      src={
        "https://player.twitch.tv/?channel=" +
        props.channel +
        "&muted=true&parent=coqui.monster&parent=coqui-monster.netlify.app&parent=localhost"
      }
      height={height}
      width="100%"
      allowFullScreen
    />
  );
}

export default TwitchEmbed;
