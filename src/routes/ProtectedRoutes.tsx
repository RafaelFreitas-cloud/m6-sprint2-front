import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/userHook";

export const ProtectedRoutes = () => {
  const { user } = useUser();

  return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
};
