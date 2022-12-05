import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/auth.context";

export const ProtectedRoute = () => {
  const { user } = useAuth();

  return user && user.token ? <Outlet /> : <Navigate to="/authentication/sign-in" />;
};
