import { Box, Stack, Typography } from '@mui/material';

import Image from 'next/image';

/**
 * Renders a content section with a title, body, and optional image.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.title='Title'] - The title of the content section.
 * @param {string} [props.body='Body'] - The body text of the content section.
 * @param {Object} [props.imageData={}] - The image data for the content section.
 * @param {boolean} [props.reversed=false] - Determines if the image and text should be reversed.
 * @returns {JSX.Element} The rendered content section component.
 */
export default function ContentSection({
  title = 'Title',
  body = 'Body',
  imageData = {},
  reversed = false,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant='h4'
        align='center'
        sx={{
          '@media (max-width:400px)': {
            fontSize: '1.6rem',
          },
        }}
      >
        {title}
      </Typography>
      <Stack
        direction={reversed ? 'row-reverse' : 'row'}
        sx={{ width: '80%', alignItems: 'center' }}
      >
        {Object.keys(imageData).length > 0 && (
          <Image
            src={imageData.src}
            alt={imageData.alt}
            width={imageData.width}
            height={imageData.height}
          />
        )}
        <Typography variant='body1'>{body}</Typography>
      </Stack>
    </Box>
  );
}
