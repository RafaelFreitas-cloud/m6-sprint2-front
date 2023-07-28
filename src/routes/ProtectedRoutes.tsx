import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/userHook";

export const ProtectedRoutes = () => {
//   const { user, loading } = useUser();
  const { user } = useUser();

//   if(!user){
//     return <Navigate to={"/"} />
//   }if (user && loading) {
//     return <div>carregando...</div>
//   } else {
//     return <Outlet />
//   }

  return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
};
