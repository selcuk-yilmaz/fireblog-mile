import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebaseConfig";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    userObserver(setAuth);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
