import { Box, CardMedia } from "@mui/material";

import "./NewProductHome.css";
import img3 from "../../../assets/img/Bitmap (3).png";
import { ProductDescriptionContainer } from "../productDescription/ProductDescriptionContainer";

export const NewProductHome = ({ prod }) => {
  return (
    <div className="newProductHome">
      <Box
        sx={{
          padding: { lg: "0 9%" },
          backgroundColor: { md: "primary.main" },
          maxWidth: "100%",
          height: 700,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: "auto",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <ProductDescriptionContainer
            tamañoLetra={50}
            colorLetras={"primary.second"}
            prod={prod}
          />
        </Box>
        <Box
          sx={{
            height: "100%",
            m: "auto",
            display: { xs: "none", md: "block" },
          }}
        >
          <CardMedia
            sx={{
              height: "100%",
              width: "100%",
            }}
            component="img"
            image={img3}
            alt="producto"
          />
        </Box>
      </Box>
    </div>
  );
};
