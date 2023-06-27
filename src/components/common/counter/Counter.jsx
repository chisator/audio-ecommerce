import { Box, Button, Typography } from "@mui/material";

export const Counter = ({ counter, setCounter, onAdd }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "48px",
        width: "290px",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Button
          sx={{
            backgroundColor: "primary.second",
          }}
          variant="text"
          onClick={() => setCounter(counter - 1)}
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
          {counter}
        </Typography>
        <Button
          sx={{
            backgroundColor: "primary.second",
          }}
          variant="text"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </Button>
      </Box>
      <Button
        onClick={() => onAdd(counter)}
        color={"secondary"}
        variant="contained"
        style={{ borderRadius: 0 }}
      >
        ADD TO CART
      </Button>
    </Box>
  );
};
