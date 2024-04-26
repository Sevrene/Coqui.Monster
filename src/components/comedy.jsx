'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook that checks if a specific key sequence is entered to trigger something special.
 * @param {string[]} code - The key sequence to trigger comedy mode.
 * @param {string} fileName - The name of the file to be used for the special thing.
 * @returns {boolean} - Returns true if the key sequence is entered completely, false otherwise.
 */
export function useComedy(code, fileName) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastKeyPressTime, setLastKeyPressTime] = useState(0);
  const [isComedy, setIsComedy] = useState(false);

  useEffect(() => {
    /**
     * Event handler for keydown events.
     * @param {KeyboardEvent} event - The keydown event object.
     */
    const handleKeyDown = (event) => {
      if (isComedy) return;

      const currentTime = new Date();
      if (currentTime - lastKeyPressTime > 5000) {
        setCurrentIndex(0);
      }
      setLastKeyPressTime(currentTime);

      if (event.key === code[currentIndex]) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0);
        return;
      }

      if (currentIndex === code.length - 1) {
        console.log("It's comedy!"); // TODO: Make this a toast notification
        document.body.style.cursor = `url("/images/comedy/${fileName}"), auto`;
        setCurrentIndex(0);
        setIsComedy(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return currentIndex === code.length;
}
