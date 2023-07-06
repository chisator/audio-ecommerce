import { Box } from "@mui/material"
import style from "./CardProduct.module.css"
export const CardProduct = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow:"hidden",
        backgroundColor: "secondary.main",
        maxWidth: {md:1100,sm:"100%"},
        height: 560,
        borderRadius: 3,
        m: "auto",
      }}
    >
      <div className={style.ovalSmall}></div>
      <div className={style.ovalMedium}></div>
      <div className={style.ovalBig}></div>
    </Box>
  );
}
