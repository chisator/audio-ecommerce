import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const ButtonBack = () => {
  const history = useNavigate();

  const goBack = () => {
    history(-1)
  };
  return (
    <Box
      sx={{
        height: "80px",
        width: "60%",
        ml: { xs: 0, md: "20%" },
        p: "20px",
        display: "flex",
      }}
    >
      <Link className="Go-Back" >
        <Button onClick={goBack}>
          <ArrowBackIosNewIcon />
          Go Back
        </Button>
      </Link>
    </Box>
  );
}
