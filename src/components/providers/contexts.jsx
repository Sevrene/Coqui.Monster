import { DrawerCtxProvider } from './drawerCtxProvider';
import { KeyStateCtxProvider } from './keyStateCtxProvider';
import { MusicPlayerCtxProvider } from './musicPlayerCtxProvider';

/**
 * Provides multiple contexts to the children components.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactNode} The wrapped child components with multiple contexts.
 */
export function Contexts({ children }) {
  return (
    <KeyStateCtxProvider>
      <MusicPlayerCtxProvider>
        <DrawerCtxProvider>{children}</DrawerCtxProvider>
      </MusicPlayerCtxProvider>
    </KeyStateCtxProvider>
  );
}
