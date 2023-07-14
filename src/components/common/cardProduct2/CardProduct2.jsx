import { Box, Button, CardMedia, Typography } from "@mui/material";
import img from "../../../assets/img/Bitmap (4).png";
import img2 from "../../../assets/img/Bitmap (5).png";
import style from "./CardProduct2.module.css";
import { Link } from "react-router-dom";

export const CardProduct2 = ({ products }) => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          maxWidth: { xs: 320, sm: 500, md: 700, lg: 1100 },
          height: { md: 201, lg: 317 },
          m: "20px auto",
        }}
      >
        <Link to={`/productDetail/${products.id}`}>
          <CardMedia
            image={img}
            sx={{ maxWidth: { xs: 320, sm: 500, md: 700, lg: 1100 } }}
            component="img"
            className={style.img}
          />
          <Box
            sx={{
              position: "absolute",
              zIndex: 5,
              m: { lg: 15, md: 6 },
            }}
          >
            <Typography
              fontSize={28}
              textTransform={"uppercase"}
              fontWeight={700}
              color={"primary"}
            >
              {products?.name}
            </Typography>
            <Button sx={{ mt: 2 }} variant="outlined">
              <Typography
                sx={{ p: 1.2 }}
                lineHeight={"17.76px"}
                fontSize={13}
                fontWeight={700}
                letterSpacing={1}
              >
                SEE PRODUCT
              </Typography>
            </Button>
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          maxWidth: { xs: 320, sm: 500, md: 700, lg: 1100 },
          height: { xs: 201 },
          m: "20px auto",
        }}
      >
        <CardMedia
          image={img2}
          sx={{ maxWidth: { xs: 320, sm: 500, md: 700, lg: 1100 } }}
          component="img"
          className={style.img}
        />
        <Box
          sx={{
            position: "absolute",
            zIndex: 5,
            m: { xs: 3, sm: 6 },
            transform: { xs: "scale(0.8)", sm: "none" },
          }}
        >
          <Typography
            fontSize={28}
            textTransform={"uppercase"}
            fontWeight={700}
            color={"primary"}
          >
            {products?.name}
          </Typography>
          <Button
            sx={{ mt: 2, backdropFilter: "blur(5px)" }}
            variant="outlined"
          >
            <Typography
              sx={{ p: 1.2 }}
              lineHeight={"17.76px"}
              fontSize={13}
              fontWeight={700}
              letterSpacing={1}
            >
              SEE PRODUCT
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};
