import { Outlet } from "react-router-dom";
import { FooterContainer } from "./footer/FooterContainer";
import { HeaderContainer } from "./header/HeaderContainer";

export const Layout = () => {
  return (
    <div>
      <div style={{ height: "90px" }}>
        <HeaderContainer />
      </div>
      <div
        style={{
          minHeight: "calc(100vh - 290px )",
        }}
      >
        <Outlet />
      </div>
      <div style={{ height: "200px" }}>
        <FooterContainer />
      </div>
    </div>
  );
};
