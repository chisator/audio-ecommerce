import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import style from "./CategoryCard.module.css";

export const CategoryCard = ({ name, image, link }) => {
  return (
    <>
      <Link to={link}>
        <Box
          className={style.container}
          sx={{
            backgroundColor: "primary.second",
            maxWidth: 350,
            height: 204,
          }}
        >
          <img src={image} alt="category" className={style.imageCategory} />
          <div className={style.sombra}></div>
          <Typography
            fontSize={18}
            letterSpacing={1.29}
            fontWeight={700}
            color={"primary.main"}
          >
            {name}
          </Typography>
          <Typography
            fontSize={13}
            fontWeight={700}
            letterSpacing={1}
            sx={{
              mb: 4,
              opacity: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            color={"primary.main"}
          >
            SHOP
            <ArrowForwardIosIcon
              sx={{
                color: "secondary.main",
                width: "20px",
                height: "10px",
                fontWeight: 700,
              }}
            />
          </Typography>
        </Box>
      </Link>
    </>
  );
};
