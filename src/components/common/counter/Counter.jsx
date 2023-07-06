import { Box, Button, Typography } from "@mui/material";
import { decrementOneById, incrementOneById, removeById } from "../../../store/cartSlice";

export const Counter = ({
  counter,
  setCounter,
  onAdd,
  addBoton,
  ancho,
  anchocontador,
  id,
  quantity,
  dispatch,
  stock,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "48px",
        minWidth: ancho,
      }}
    >
      <Box
        sx={{
          width: "96px",
          display: "flex",
        }}
      >
        <Button
          sx={{
            backgroundColor: "primary.second",
            minWidth: anchocontador,
          }}
          variant="text"
          onClick={() =>
            addBoton
              ? setCounter(counter - 1)
              : quantity > 1
              ? dispatch(decrementOneById(id))
              : dispatch(removeById(id))
          }
          disabled={addBoton && counter == 1 ? true : false}
        >
          -
        </Button>
        <Typography
          sx={{
            backgroundColor: "primary.second",
            display: "flex",
            alignItems: "center",
          }}
        >
          {quantity 
          ? quantity<stock ? quantity:stock
          : counter}
        </Typography>
        <Button
          sx={{
            backgroundColor: "primary.second",
            minWidth: anchocontador,
          }}
          variant="text"
          onClick={() =>
            addBoton ? setCounter(counter + 1) : dispatch(incrementOneById(id))
          }
          disabled={quantity ? quantity >= stock : counter >= stock}
        >
          +
        </Button>
      </Box>
      {addBoton ? (
        <Button
          onClick={() => onAdd(counter)}
          color={"secondary"}
          variant="contained"
          style={{ borderRadius: 0 }}
        >
          ADD TO CART
        </Button>
      ) : null}
    </Box>
  );
};
Counter.defaultProps = {
  addBoton: true,
  ancho: 290,
  anchocontador:55
};
