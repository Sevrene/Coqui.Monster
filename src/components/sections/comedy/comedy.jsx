'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook for enabling comedy based on a specific key code sequence.
 * @param {string[]} code - The key code sequence to trigger comedy mode.
 * @param {Function} handler - The function to be called when comedy mode is triggered.
 * @returns {boolean} - Returns true if comedy is active, false otherwise.
 */
export function useComedy(code, handler) {
  const [isComedy, setIsComedy] = useState(false);
  let currentIndex = 0;
  let lastKeyPressTime = 0;

  const handleKeyDown = (event) => {
    if (isComedy) {
      window.removeEventListener('keydown', handleKeyDown);
      return;
    }

    const currentTime = new Date();
    if (currentTime - lastKeyPressTime > 5000) {
      currentIndex = 0;
    }
    lastKeyPressTime = currentTime;

    if (event.key === code[currentIndex]) {
      currentIndex++;
    } else {
      currentIndex = 0;
      return;
    }

    if (currentIndex === code.length) {
      handler();
      currentIndex = 0;
      setIsComedy(true);
    }
  };

  useEffect(() => {
    if (isComedy) {
      return;
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isComedy]);

  return isComedy;
}
