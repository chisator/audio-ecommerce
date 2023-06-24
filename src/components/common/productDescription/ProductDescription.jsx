import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductDescription = ({ prod, colorLetras, tamañoLetra }) => {
  return (
    <Box
      sx={{
        maxBlockSize: { md: 400 },
        display: "flex",
        p: { xs: 1, md: 7 },
        flexDirection: "column",
        alignItems: { xs: "center", md: "start" },
        justifyContent: "space-between",
      }}
    >
      {prod?.new ? (
        <Typography
          color={"secondary"}
          fontSize={14}
          fontWeight={100}
          letterSpacing={10}
          sx={{ textAlign: "center" }}
        >
          NEW PRODUCT
        </Typography>
      ) : (
        <br />
      )}
      <Typography
        color={colorLetras}
        fontSize={{ md: tamañoLetra, sm: 38,xs:30 }}
        fontWeight={"700"}
        sx={{
          textAlign: { xs: "center", md: "start" },
          width: { xs: "87%", sm: "60%" },
        }}
      >
        {prod?.name}
      </Typography>
      <Typography
        color={colorLetras}
        sx={{ textAlign: { xs: "center", md: "start" }, mt: 3 }}
      >
        {prod?.description}
      </Typography>
      <Link to={`/productDetail/${prod?.id}`}>
        <Button
          sx={{ mt: 4 }}
          color={"secondary"}
          variant="contained"
          style={{ borderRadius: 0 }}
        >
          SEE PRODUCT
        </Button>
      </Link>
    </Box>
  );
};
ProductDescription.defaultProps = {
  colorLetras: "primary.main",
  tamañoLetra:38,
};
