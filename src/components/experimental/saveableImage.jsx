'use client';

import Image from 'next/image';
import { KeyStateContext } from '../providers/keyStateCtxProvider';
import { useContext } from 'react';

/**
 * A component that circumvents Next.js's image optimization when the Control key is held down to get around the webp format.
 *
 * @component
 * @param {string} src - The source URL of the image.
 * @param {string} alt - The alternative text for the image.
 * @param {number} width - The width of the image.
 * @param {number} height - The height of the image.
 * @param {Object} props - The other props to pass to the Image component.
 * @returns {JSX.Element} The rendered SaveableImage component.
 */
export default function SaveableImage({ src, alt, width, height, ...props }) {
  const { state } = useContext(KeyStateContext);
  const ctrlDown = state.keysDown['Control'];

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized={ctrlDown}
      {...props}
    />
  );
}
