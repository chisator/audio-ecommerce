import {
  AppBar,
  Badge,
  Box,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import img from "../../../assets/img/logo_qnvapf.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { menu } from "../../../routes/navigation";
import { CustomModalContainer } from "../../common/customModal/CustomModalContainer";
export const Header = ({ open, handleClose, handleOpen }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{ margin: { md: "0px 9%" } }}
          style={{ minHeight: "90px" }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: { xs: "70%", sm: "30%" },
              }}
            >
              <IconButton
                onClick={() => setOpenDrawer(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 4 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                className="drawer"
                open={openDrawer}
                anchor="left"
                onClose={() => setOpenDrawer(false)}
              >
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "primary.main",
                    padding: "40px",
                  }}
                >
                  {menu.map((item) => {
                    return (
                      <Grid
                        key={item.id}
                        sx={{ marginBottom: "25px", ml: 4 }}
                        item
                        fontSize={15}
                      >
                        <Link to={item.path}>{item.title}</Link>
                      </Grid>
                    );
                  })}

                  <hr className="white-line"></hr>
                  <Box sx={{ ml: 4 }}>
                    <Link
                      style={{ marginBottom: "20px" }}
                      to="/register"
                      className="linkSign"
                    >
                      Register
                    </Link>
                    <Link to="/login" className="linkSign">
                      Log In
                    </Link>
                  </Box>
                </Box>
              </Drawer>
              <img src={img} className="logo" alt="" />
            </Box>
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartOutlinedIcon onClick={handleOpen} />
            <CustomModalContainer
              open={open}
              handleClose={handleClose}
              handleOpen={handleOpen}
            />
            </Badge>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",

              alignItems: "center",
              width: "100%",
            }}
          >
            <img src={img} className="logo" alt="" />
            <Grid
              container
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: "0",
                gap: "30px",
              }}
              color={"secondary"}
            >
              {menu.map((item) => {
                return (
                  <Grid key={item.id} item fontSize={13}>
                    <Link to={item.path}>{item.title}</Link>
                  </Grid>
                );
              })}
            </Grid>
            <Box sx={{ mr: 2 }} style={{ display: "flex", gap: "0.5rem" }}>
              <Link to="/register" className="linkSign">
                Register
              </Link>
              <hr style={{ height: "30px" }} />
              <Link style={{ width: "45px" }} to="/login" className="linkSign">
                Log In
              </Link>
            </Box>
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartOutlinedIcon onClick={handleOpen} />
            </Badge>
            <CustomModalContainer
              open={open}
              handleClose={handleClose}
              handleOpen={handleOpen}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
