import { Box } from '@mui/material';
import OfflineOverlay from './offlineOverlay';

/**
 * Renders the StreamViewer component.
 * @returns {JSX.Element} The rendered StreamViewer component.
 */
export default function StreamViewer() {
  return (
    <Box style={{ position: 'relative', paddingBottom: '56.25%' }}>
      <iframe
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        title='livestream'
        src={
          'https://player.twitch.tv/?channel=' +
          'coqui' +
          '&muted=true&parent=coqui.monster&parent=coqui-monster.netlify.app&parent=localhost&parent=potential-space-computing-machine-v5xr6jqpgqfpr54-3000.app.github.dev'
        }
        allowFullScreen
      />
      <OfflineOverlay />
    </Box>
  );
}
