import { Box, CardMedia} from "@mui/material";
import { ProductDescriptionContainer } from "../productDescription/ProductDescriptionContainer";


export default function Product  ({ prod, i, onAdd, precio, posicion, stock })  {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: 1100,
        m: "0 auto 100px",
        flexDirection: {
          xs: "column",
          md: i % 2 === 1 ? "row-reverse" : "row",
        },
      }}
    >
      <Box
        sx={{
          m: "0 auto",
        }}
      >
        <CardMedia
          sx={{
            m: "auto",
            borderRadius: 4,
            width: { md: 530, sm: 500, xs: "94%" },
          }}
          component="img"
          image={prod.image}
          alt="producto"
        />
      </Box>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <ProductDescriptionContainer
          prod={prod}
          precio={precio}
          onAdd={onAdd}
          posicion={posicion}
          stock={stock}
        />
      </div>
    </Box>
  );
}
