import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const ButtonBack = () => {
  return (
    <Box sx={{height:"80px",width:"60%",ml:{xs:0,md:"20%"},p:"20px",display:"flex"}}>
      <Link className="Go-Back" to={"/"}>
        <Button>
          <ArrowBackIosNewIcon />
          Go Back
        </Button>
      </Link>
    </Box>
  );
}
