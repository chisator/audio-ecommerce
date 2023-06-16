import { Route, Routes } from "react-router-dom";
import { menuRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      {menuRoutes.map(({ id, path, Element }) => (
        <Route key={id} path={path} element={<Element />} />
      ))}
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};
