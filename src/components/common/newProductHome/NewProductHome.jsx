import { Box, CardMedia } from "@mui/material";
import "./NewProductHome.css";
import { ProductDescription } from "../productDescription/ProductDescription";
import img3 from "../../../assets/img/Bitmap (3).png";
import img2 from "../../../assets/img/Bitmap2.png";

export const NewProductHome = ({ prod }) => {
  return (
    <div style={{
      backgroundImage:{img2},
    backgroundSize: "cover",
    backgroundPosition: "center center"
    }} className="newProductHome">
      <Box
      
        sx={{
          backgroundColor: "primary.main",
          maxWidth: "100%",
          height: 700,
          display: "flex",
          justifyContent: "center",
          alignItems:  "center" ,
          m: "auto",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <ProductDescription
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
