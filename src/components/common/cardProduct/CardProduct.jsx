import { Box, CardMedia } from "@mui/material";
import img from "../../../assets/img/image-category-card(1).png";
import style from "./CardProduct.module.css";
import { ProductDescriptionContainer } from "../productDescription/ProductDescriptionContainer";
export const CardProduct = ({ prod }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "secondary.main",
        maxWidth: { xs: 320, sm: 500, md: 700, lg: 1100 },
        height: { xs: 650, sm: 720, md: 490 },
        borderRadius: 3,
        m: "auto",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: -260, sm: -270, md: -30 },
          left: { xs: -215, sm: -130, md: -170, lg: -150 },
          zIndex: 0,
        }}
      >
        <div className={style.ovalSmall}></div>
        <div className={style.ovalMedium}></div>
        <div className={style.ovalBig}></div>
      </Box>
      <Box
        sx={{
          display: { md: "flex" },
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: 203, md: 700 },
            height: { md: 500 },
            m: "20px auto 0",
            zIndex: 2,
          }}
        >
          <CardMedia
            sx={{
              position: { md: "absolute" },
              bottom: -20,
              left: 50,
              width: { xs: 172.248, md: 300, lg: 340 },
              height: { xs: 207, md: 390, lg: 420 },
              m: "auto",
            }}
            className={style.speaker}
            component="img"
            image={img}
            alt=""
          />
        </Box>
        <Box
          sx={{
            maxWidth: { xs: 320, md: 350 },
            height: { md: 500 },
            m: { xs: "auto", md: " 0", lg: "0px 80px 0" },
          }}
        >
          <ProductDescriptionContainer
            prod={prod}
            buttonColor={"primary"}
            colorLetras={"primary.second"}
          />
        </Box>
      </Box>
    </Box>
  );
};
