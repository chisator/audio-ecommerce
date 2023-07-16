import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
export const ProtectedRoutes = () => {
  const { user } = useSelector((store) => store.authSlice);
  console.log(user)
  const { isLogged, accessToken } = useSelector((store) => store.authSlice);
  return <>{isLogged && accessToken 
    ? <Outlet />
    : <Navigate to="/login" />}</>;
};
/* return (
  <>
    {isLogged && accessToken ? (
      user.rol === "admin" ? (
        <Outlet />
      ) : (
        "NO sos ADMIN"
      )
    ) : (
      <Navigate to="/login" />
    )}
  </>
); */