'use client';

import { createContext, useState } from 'react';

export const DrawerContext = createContext();

/**
 * Provides a context for managing the state of a drawer component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactNode} The rendered component.
 */
export const DrawerCtxProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(null);

  /**
   * Toggles the state of the drawer.
   *
   * @param {string} drawer - The identifier of the drawer.
   * @returns {void}
   */
  const toggleDrawer = (drawer) => {
    if (openDrawer === drawer) {
      setOpenDrawer(null);
    } else {
      setOpenDrawer(drawer);
    }
  };

  return (
    <DrawerContext.Provider value={{ openDrawer, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
