import { useState } from "react";
import { Header } from "./Header"


export const HeaderContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Header  handleClose={handleClose} handleOpen={handleOpen} open={open} />
  )
}
