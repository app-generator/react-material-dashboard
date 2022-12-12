import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { oneOfType, arrayOf, node } from "prop-types";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || {});

  const handleUserData = useCallback(
    (data, token) => {
      const fetchedUser = { ...data, token };

      localStorage.setItem("user", JSON.stringify(fetchedUser));
      setUser(fetchedUser);
    },
    [setUser]
  );

  const userData = useMemo(() => ({ user, handleUserData }), [user, handleUserData]);

  return <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>;
};

AuthProvider.defaultProps = {
  children: null,
};

AuthProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]),
};

export const useAuth = () => useContext(AuthContext);
