import { Box } from "@mui/material";
import "./Category.css";
import ProductContainer from "../../common/product/ProductContainer";

export default function Category({ products }) {
  return (
    <>
      {products.map((prod, i) => {
        return (
          <Box key={prod.id}>
            <ProductContainer prod={prod} i={i} />
          </Box>
        );
      })}
    </>
  );
}
