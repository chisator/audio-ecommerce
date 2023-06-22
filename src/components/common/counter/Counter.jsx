import { Button, Typography } from "@mui/material";

export const Counter = ({ counter, setCounter, onAdd }) => {
  return (
    <div>
      <Button variant="outlined" onClick={() => setCounter(counter - 1)}>
        -
      </Button>
      <Typography color={"primary"}>{counter}</Typography>
      <Button variant="outlined" onClick={() => setCounter(counter + 1)}>
        +
      </Button>
      <Button onClick={() => onAdd(counter)}>ADD TO CART</Button>
    </div>
  );
};
