import { Box, CardMedia} from "@mui/material";
import { ProductDescriptionContainer } from "../productDescription/ProductDescriptionContainer";


export const Product = ({ prod, i }) => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: 1100,
        m: "40px auto",
        flexDirection: {
          xs: "column",
          md: i % 2 === 0 ? "row" : "row-reverse",
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          borderRadius: 6,
          maxWidth: { md: 1100, xs: 400 },
          m: "0 auto",
        }}
      >
        <CardMedia component="img" image={prod.image} alt="producto" />
      </Box>
      <ProductDescriptionContainer prod={prod}/>
    </Box>
  );
};
