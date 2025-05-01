import { Homepage, Media } from '@/payload-types';
import { Box, Stack, Typography } from '@mui/material';

import Image from 'next/image';
import { JSX } from 'react';
import { RichText } from '../rich_text/richText';

type ContentBlockProps = Homepage['aboutSections'][number];

function isMediaObject(img: unknown): img is Media {
  return typeof img === 'object' && img !== null && 'url' in img;
}

export default function ContentBlock({
  title,
  content,
  image,
  imagePosition,
}: ContentBlockProps): JSX.Element {
  const reversed = imagePosition === 'right';
  const validImage = isMediaObject(image) ? image : null;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        padding: '16px 0',
        background: 'linear-gradient(135deg, #00000050, #00000000 40%)',
        borderRadius: '8px',
        boxShadow: '-6px -6px 6px rgba(0, 0, 0, 0.25)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '-6px -6px 6px rgba(255, 255, 255, 0.05)',
        },
      }}
    >
      <Typography variant='h4' align='center'>
        {title}
      </Typography>
      <Stack
        direction={reversed ? 'row-reverse' : 'row'}
        sx={{ width: '80%', alignItems: 'center' }}
      >
        {validImage && (
          <Image
            src={validImage.url ?? ''}
            alt={validImage.alt ?? ''}
            width={validImage.width ?? 0}
            height={validImage.height ?? 0}
          />
        )}
        <RichText lexicalData={content} />
      </Stack>
    </Box>
  );
}
