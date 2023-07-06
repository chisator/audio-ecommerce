import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { isLogged, accessToken } = useSelector((store) => store.authSlice);
  return <>{isLogged && accessToken ? <Outlet /> : <Navigate to="/login" />}</>;
};
