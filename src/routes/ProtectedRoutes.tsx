import { Navigate, Outlet } from "react-router-dom";
import { useProvider } from "../hooks/providerHook";

export const ProtectedRoutes = () => {
  const { user } = useProvider();

  return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
};
