import { useState } from "react";
import { Header } from "./Header"
import { useSelector } from "react-redux";

export const HeaderContainer = () => {
  const {cart} = useSelector((store) => store.cartSlice);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Header
      handleClose={handleClose}
      openDrawer={openDrawer}
      setOpenDrawer={setOpenDrawer}
      handleOpen={handleOpen}
      open={open}
      cart={cart}
    />
  );
}
