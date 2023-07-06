import { Route, Routes } from "react-router-dom";
import { menuRoutes } from "./routes";
import { Layout } from "../components/layout/Layout";
import { DashboardContainer } from "../components/pages/dashboard/DashBoardContainer";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AppRouter = () => {
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
