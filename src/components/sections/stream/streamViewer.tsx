import AspectRatio from '@/utils/aspectRatio';
import Script from 'next/script';
import StreamViewerClient from './streamViewerClient';

interface TwitchPlayerProps {
  channel: string;
  scheduleImage: string;
  extraImage: string;
}

export default function StreamViewer({
  channel,
  scheduleImage,
  extraImage,
}: TwitchPlayerProps) {
  if (!channel) {
    return null;
  }

  return (
    <>
      <Script
        src='https://player.twitch.tv/js/embed/v1.js'
        strategy='beforeInteractive'
      />
      <AspectRatio>
        <StreamViewerClient
          channel={channel}
          scheduleImage={scheduleImage}
          extraImage={extraImage}
        />
      </AspectRatio>
    </>
  );
}
