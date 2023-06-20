import {
  AppBar,
  Badge,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import img from "../../../assets/img/logo_qnvapf.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
export const Header = () => {
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
                open={openDrawer}
                anchor="left"
                onClose={() => setOpenDrawer(false)}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>HOME</ListItemIcon>
                      <ListItemText  />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>HEADPHONES</ListItemIcon>
                      <ListItemText  />
                    </ListItemButton>
                  </ListItem>
                </List>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>SPEAKERS</ListItemIcon>
                      <ListItemText  />
                    </ListItemButton>
                  </ListItem>
                </List>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>EARPHONES</ListItemIcon>
                      <ListItemText  />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Drawer>
              <img src={img} alt="" />
            </Box>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon />
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
            <img src={img} alt="" />
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
              <Grid item fontSize={13}>
                <Link>HOME</Link>
              </Grid>
              <Grid item fontSize={13}>
                <Link>HEADPHONES</Link>
              </Grid>
              <Grid item fontSize={13}>
                <Link>SPEAKERS</Link>
              </Grid>
              <Grid item fontSize={13}>
                <Link>EARPHONES</Link>
              </Grid>
            </Grid>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
