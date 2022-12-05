import { createContext, useCallback, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || {});

  const handleUserData = useCallback(
    (userData, token) => {
      const _user = { ...userData, token };

      localStorage.setItem("user", JSON.stringify(_user));
      setUser(_user);
    },
    [setUser]
  );

  return <AuthContext.Provider value={{ user, handleUserData }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
