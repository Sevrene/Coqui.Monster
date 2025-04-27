import { Box } from '@mui/system';

/**
 * Renders a container for the drawer with a pull tab.
 *
 * @param {Object} pullTabProps - The props for the pull tab.
 * @param {ReactNode} children - The content to be rendered inside the container.
 * @returns {ReactNode} The rendered drawer container.
 */
export default function DrawerContainer({ pullTabProps, children }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        right: '-48px',
        top: '50%',
        transform: 'translateY(-50%)',
        ...pullTabProps,
      }}
    >
      {children}
    </Box>
  );
}
