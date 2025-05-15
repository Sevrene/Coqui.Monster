import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';

interface TwitchEmbed {
  Player: {
    ONLINE: string;
    OFFLINE: string;
    new (elementId: string, options: TwitchPlayerOptions): TwitchPlayer;
  };
}

interface TwitchPlayerOptions {
  width?: string | number;
  height?: string | number;
  channel?: string;
  muted?: boolean;
  parent?: string[];
}

interface TwitchPlayer {
  play(): void;
  pause(): void;
  setChannel(channel: string): void;
  getChannel(): string;
  addEventListener(event: string, callback: () => void): void;
  removeEventListener(event: string, callback: () => void): void;
}

declare global {
  interface Window {
    Twitch?: TwitchEmbed;
  }
}

interface UseTwitchPlayerProps {
  channel: string;
  setIsLive: Dispatch<SetStateAction<boolean | null>>;
  setIsTooSmall?: Dispatch<SetStateAction<boolean | null>>;
  playerRef: RefObject<HTMLDivElement>;
  playerInitializedRef: RefObject<boolean>;
  playerId: string;
}

// Twitch enforces a strict restriction on the embeded player's sizing.
// The player must be at least 400px wide and 300px tall and will not display if it is smaller than that.
// The container itself will stay, but all inner HTML will be cleared.
const minWidth = 400;
const minHeight = 300;

export const useTwitchPlayer = ({
  channel,
  setIsLive,
  setIsTooSmall,
  playerRef,
  playerInitializedRef,
  playerId,
}: UseTwitchPlayerProps): void => {
  // The actual injected player object
  const currentPlayer = useRef<TwitchPlayer | null>(null);
  const retryRef = useRef(false);
  // Debounce resize events to avoid excessive calls to the resize handler
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const debounceDelay = 300;

  const onlineHandler = useCallback(() => setIsLive(true), [setIsLive]);
  const offlineHandler = useCallback(() => setIsLive(false), [setIsLive]);

  const cleanupPlayer = useCallback(() => {
    const playerContainer = playerRef.current;

    if (playerContainer) {
      playerContainer.innerHTML = '';

      if (currentPlayer.current && window.Twitch?.Player) {
        try {
          currentPlayer.current.removeEventListener(
            window.Twitch.Player.ONLINE,
            onlineHandler
          );
          currentPlayer.current.removeEventListener(
            window.Twitch.Player.OFFLINE,
            offlineHandler
          );
        } catch (error) {
          console.error('Error removing Twitch event listeners:', error);
        }
      }
    }

    if (playerInitializedRef.current) {
      setIsLive(null);
      playerInitializedRef.current = false;
    }
    retryRef.current = false;
  }, [playerRef, setIsLive, playerInitializedRef]);

  const initializePlayer = useCallback(() => {
    if (!window.Twitch?.Player) {
      retryRef.current = true;
      setTimeout(() => {
        initializePlayer();
      }, 1000);
      return false;
    }

    // If already initialized, do nothing
    if (playerInitializedRef.current) {
      return true;
    }

    let hostname: string;
    try {
      hostname = new URL(process.env.NEXT_PUBLIC_BASE_URL as string).hostname;
    } catch (e) {
      console.error(
        'Invalid NEXT_PUBLIC_BASE_URL:',
        process.env.NEXT_PUBLIC_BASE_URL
      );
      cleanupPlayer();
      setIsTooSmall(true);
      return false;
    }

    try {
      const player = new window.Twitch.Player(playerId, {
        width: '100%',
        height: '100%',
        channel: channel,
        muted: true,
        parent: [hostname],
      });

      // Add event listeners for online/offline status
      player.addEventListener(window.Twitch.Player.ONLINE, onlineHandler);
      player.addEventListener(window.Twitch.Player.OFFLINE, offlineHandler);

      setIsLive(null);
      setIsTooSmall(false);
      currentPlayer.current = player;
      playerInitializedRef.current = true;
      return true;
    } catch (error) {
      console.error('Error initializing Twitch Player:', error);
      cleanupPlayer();
      setIsTooSmall(null);
      return false;
    }
  }, [
    playerId,
    channel,
    onlineHandler,
    offlineHandler,
    setIsLive,
    setIsTooSmall,
    cleanupPlayer,
    playerInitializedRef,
    playerRef,
  ]);

  useEffect(() => {
    const playerContainer = playerRef.current;

    if (!playerContainer) {
      return;
    }

    const handleResize = () => {
      // Recheck for when called by ResizeObserver
      if (!playerContainer) return;

      const { offsetWidth, offsetHeight } = playerContainer;
      const isTooSmall = offsetWidth < minWidth || offsetHeight < minHeight;
      const isPlayerInitialized = playerInitializedRef.current;

      setIsTooSmall(isTooSmall);

      if (isTooSmall) {
        if (isPlayerInitialized) {
          cleanupPlayer();
        }
      } else {
        if (!isPlayerInitialized) {
          initializePlayer();
        }
      }
    };

    const debouncedHandleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(handleResize, debounceDelay);
    };

    const resizeObserver = new ResizeObserver(debouncedHandleResize);
    resizeObserver.observe(playerContainer as HTMLElement);

    handleResize();

    return () => {
      resizeObserver.disconnect();
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      cleanupPlayer();
    };
  }, [
    playerRef,
    cleanupPlayer,
    initializePlayer,
    playerInitializedRef,
    setIsTooSmall,
    debounceDelay,
  ]);
};
