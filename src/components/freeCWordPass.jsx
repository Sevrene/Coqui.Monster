import { Box } from '@mui/material';
import Image from 'next/image';

/**
 * Renders the FreeCWordPass component.
 * This component displays a sticky box with an image that links to the '/free-cword-pass' page.
 *
 * @returns {JSX.Element} The rendered FreeCWordPass component.
 */
export function FreeCWordPass() {
  return (
    <Box
      sx={{
        position: 'sticky',
        transform: 'translateX(100px) translateY(-150%)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateX(100px) translateY(0)',
        },
      }}
    >
      <a href='/free-cword-pass'>
        <Image
          src='/images/brand/cute_pass.png'
          alt='Logo'
          width={64}
          height={64}
          style={{
            position: 'absolute',

            cursor: 'pointer',
          }}
        />
      </a>
    </Box>
  );
}
