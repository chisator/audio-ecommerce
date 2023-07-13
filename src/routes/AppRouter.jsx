import { Route, Routes, useLocation } from "react-router-dom";
import { menuRoutes } from "./routes";
import { Layout } from "../components/layout/Layout";
import { DashboardContainer } from "../components/pages/dashboard/DashBoardContainer";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { useEffect } from "react";

export const AppRouter = () => {
   const location = useLocation();
   useEffect(() => {
     window.scrollTo(0, 0);
   }, [location]);
  return (
    <Routes>
      <Route element={<Layout />}>
        {menuRoutes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/dashboard-admin" element={<DashboardContainer />} />
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};
