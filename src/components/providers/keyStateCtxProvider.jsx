'use client';

import { createContext, useEffect, useReducer } from 'react';

export const KeyStateContext = createContext();

const initialState = {
  keysDown: {},
};

function keyStateReducer(state, action) {
  switch (action.type) {
    case 'KEY_DOWN':
      return { ...state, keysDown: { ...state.keysDown, [action.key]: true } };
    case 'KEY_UP':
      const newKeysDown = { ...state.keysDown };
      delete newKeysDown[action.key];
      return { ...state, keysDown: newKeysDown };
    default:
      return state;
  }
}

/**
 * Provides a context for managing the state of keyboard keys.
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactNode} The component with the key state context provider.
 */
export const KeyStateCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(keyStateReducer, initialState);

  useEffect(() => {
    const keyDownHandler = (event) => {
      dispatch({ type: 'KEY_DOWN', key: event.key });
    };

    const keyUpHandler = (event) => {
      dispatch({ type: 'KEY_UP', key: event.key });
    };

    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, [dispatch]);

  return (
    <KeyStateContext.Provider value={{ state, dispatch }}>
      {children}
    </KeyStateContext.Provider>
  );
};
