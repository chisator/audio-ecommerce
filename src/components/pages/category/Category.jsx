import { Box, Typography } from "@mui/material";

import "./Category.css";
import { ProductContainer } from "../../common/product/ProductContainer";
export const Category = ({ products, categoryName }) => {
  return (
    <div>
      <div className="linea"></div>
      <Box sx={{ backgroundColor: "primary.main" }} className="navbar">
        <Typography
          variant="h4"
          fontSize={{ xs: 30 }}
          textAlign={"center"}
          textTransform={"uppercase"}
          sx={{ mb: 5, padding: "27px 0", color: "primary.second" }}
        >
          {categoryName}
        </Typography>
      </Box>
      {products?.map((prod, i) => {
        return (
          <Box key={prod.id}>
            <ProductContainer prod={prod} i={i}></ProductContainer>
          </Box>
        );
      })}
    </div>
  );
};
