import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CounterContainer } from "../counter/CounterContainer";

export const ProductDescription = ({
  prod,
  colorLetras,
  tamañoLetra,
  onAdd,
  precio,
  posicion,
  stock,
}) => {
  return (
    <Box
      sx={{
        maxBlockSize: { md: 400 },
        m: "20px 0",
        display: "flex",
        gap: 2,
        p: { xs: 1, md: "8% 7%" },
        flexDirection: "column",
        alignItems: { xs: posicion, md: "start" },
        justifyContent: "space-between",
      }}
    >
      {prod?.new ? (
        <Typography
          color={"secondary"}
          fontSize={14}
          fontWeight={100}
          letterSpacing={10}
          sx={{ textAlign: posicion }}
        >
          NEW PRODUCT
        </Typography>
      ) : (
        <br />
      )}
      <Typography
        color={colorLetras}
        fontSize={{ md: tamañoLetra, sm: 38, xs: 30 }}
        fontWeight={"700"}
        sx={{
          textTransform: "uppercase",
          textAlign: { xs: posicion, md: "start" },
          width: { xs: "87%", sm: "60%" },
        }}
      >
        {prod?.name}
      </Typography>
      <Typography
        color={colorLetras}
        sx={{ textAlign: { xs: posicion, md: "start" }, mt: 3, opacity: "50%" }}
      >
        {prod?.description}
      </Typography>
      {precio ? (
        <Typography
          letterSpacing={1.3}
          fontSize={18}
          fontWeight={700}
          sx={{ color: "primary.main" }}
        >
          $ {prod?.price}
        </Typography>
      ) : null}
      <Box>
        {onAdd ? (
          <CounterContainer onAdd={onAdd} stock={stock} />
        ) : (
          <Link to={`/productDetail/${prod?.id}`}>
            <Button
              sx={{ mt: 4, height: "48px", width: "160px" }}
              color={"secondary"}
              variant="contained"
              style={{ borderRadius: 0 }}
            >
              SEE PRODUCT
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};
ProductDescription.defaultProps = {
  colorLetras: "primary.main",
  tamañoLetra: 38,
  precio: false,
  onAdd: null,
  posicion:"center",
};
