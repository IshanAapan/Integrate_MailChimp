// utils/ContextProvider.js
import React, { createContext, useContext, useState } from 'react';

// Create a new context
const GHStContext = createContext();

// Create a provider component
export const GHStProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <GHStContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </GHStContext.Provider>
  );
};

// Create a custom hook to access the context
export const useGHStContext = () => useContext(GHStContext);
