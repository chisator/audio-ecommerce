import { Box, CardMedia, Typography } from "@mui/material";
import "./Tarjeta.css";
import img from "../../../assets/img/Bitmap.png";
import img1 from "../../../assets/img/Bitmap (1).png";
export const Tarjeta = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          margin: "40px auto",
          justifyContent: "center",
          flexDirection: {
            lg: "row",
            xs: "column-reverse",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{ width: { lg: "560px", sm: "90%", xs: "100%" } }}
          className="texto-audio"
        >
          <Typography
            sx={{
              width: { lg: "455px", sm: 500, xs: "80%" },
              margin: { xs: "auto", lg: "0" },
              textAlign: { xs: "center", lg: "start" },
            }}
            fontSize={{ sm: 40, xs: 28 }}
            color={"primary"}
          >
            BRINGING YOU THE<span className="best"> BEST </span>AUDIO GEAR
          </Typography>

          <Typography
            fontSize={15}
            sx={{
              width: { lg: "455px", sm: 500, xs: "80%" },
              margin: { xs: "auto", lg: "0" },
              textAlign: { xs: "center", lg: "start" },
            }}
            color={"primary.negro"}
          >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { lg: 540, md: 689, xs: "80%" },
            height: { lg: 588, sm: 300 },
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { lg: "100%", sm: "50%" },
              height: "100%",
              borderRadius: 4,
              margin: "auto",
              display: { lg: "block", md: "none", sm: "block" },
            }}
            image={img}
            alt="modelo"
          />
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              height: "100%",

              borderRadius: 4,
              display: { lg: "none", md: "block", xs: "none" },
            }}
            image={img1}
            alt="modelo"
          />
        </Box>
      </Box>
    </Box>
  );
};
