import React, { createContext, useEffect, useRef, useState } from "react";
// import {GET } from '../services/httpClient';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [snackbarState, setSnackbarState] = useState({
    severity: "",
    open: false,
    message: "",
  });

  const value = {
    isLoading,
    setIsLoading,
    snackbarState,
    setSnackbarState,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
