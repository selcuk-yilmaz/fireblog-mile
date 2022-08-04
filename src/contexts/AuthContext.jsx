import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebaseConfig";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    userObserver(setAuth);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
