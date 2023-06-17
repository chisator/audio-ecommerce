import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import img from "../../../assets/img/logo_qnvapf.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box></Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
           <img src={img} alt="" />
          <div>
            <Link></Link>
            <Link></Link>
            <Link></Link>
            <Link></Link>
          </div>
          <ShoppingCartOutlinedIcon/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
