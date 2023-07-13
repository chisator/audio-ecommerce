import { Box, Typography } from "@mui/material";

export const CategoryNavar = ({ categoryName }) => {
  return (
    <>
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
    </>
  );
};
