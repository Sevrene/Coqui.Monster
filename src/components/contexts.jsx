import { DrawerCtxProvider } from './drawerCtxProvider';
import { MusicPlayerCtxProvider } from './musicPlayerCtxProvider';

export function Contexts({ children }) {
  return (
    <MusicPlayerCtxProvider>
      <DrawerCtxProvider>{children}</DrawerCtxProvider>
    </MusicPlayerCtxProvider>
  );
}
