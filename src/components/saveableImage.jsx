'use client';

import { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import Image from 'next/image';

/**
 * Renders a saveable image component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.imageData - The image data object.
 * @param {string} props.imageData.src - The source URL of the image.
 * @param {string} props.imageData.alt - The alternative text for the image.
 * @param {number} props.imageData.width - The width of the image.
 * @param {number} props.imageData.height - The height of the image.
 * @returns {JSX.Element} The saveable image component.
 */
export default function SaveableImage({ imageData = {} }) {
  const [ctrlDown, setCtrlDown] = useState(false);
  let finalImageData = {};

  if (imageData) {
    const defaultImageData = { src: '', alt: '' };
    finalImageData = { ...defaultImageData, ...imageData };
  }

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'Control') {
        setCtrlDown(true);
      }
    };

    const keyUpHandler = (event) => {
      if (event.key === 'Control') {
        setCtrlDown(false);
      }
    };

    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      <Image
        src={finalImageData.src}
        alt={finalImageData.alt}
        width={finalImageData.width}
        height={finalImageData.height}
        unoptimized={ctrlDown}
        {...finalImageData}
      />
    </Box>
  );
}
