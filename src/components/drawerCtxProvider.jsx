'use client';

import { createContext, useState } from 'react';

export const DrawerContext = createContext();

export const DrawerCtxProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(null);

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
