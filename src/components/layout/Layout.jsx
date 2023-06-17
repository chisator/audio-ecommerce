import { Outlet } from "react-router-dom";
import { FooterContainer } from "./footer/FooterContainer";
import { HeaderContainer } from "./header/HeaderContainer";

export const Layout = () => {
  return (
    <div>
      <div>
        {/* navbar */}
        <HeaderContainer style={{height:"60px"}}></HeaderContainer>
      </div>
      <div style={{minHeight:"calc(100vh - 260px )"}}>
        {/* Hijos */}
        <Outlet />
      </div>
      <div>
        {/* Footer */}
        <FooterContainer style={{height:"200px"}}></FooterContainer>
      </div>
    </div>
  );
};
