import { Outlet } from "react-router-dom";
import { FooterContainer } from "./footer/FooterContainer";
import { HeaderContainer } from "./header/HeaderContainer";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <div>
      <div style={{ height: "90px" }}>
        <HeaderContainer />
      </div>
      <Box
        sx={{
          backgroundColor:"white",
          minHeight: "calc(100vh - 290px )",
        }}
      >
        <Outlet />
      </Box>
      <div style={{ height: "200px" }}>
        <FooterContainer />
      </div>
    </div>
  );
};
