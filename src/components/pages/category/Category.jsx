import { Box, Button, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Category.css"
export const Category = ({ products }) => {
  return (
    <div>
      <div className="linea"></div>
      <Box className="navbar">
        <Typography
          variant="h4"
          fontSize={{xs:30}}
          textAlign={"center"}
          textTransform={"uppercase"}
          sx={{mb:5,padding:"27px 0"}}
        >
          {products[0]?.category}
        </Typography>
      </Box>
      {products?.map((prod, i) => {
        return (
          <Box
            key={prod.id}
            sx={{
              display: "flex",
              maxWidth:1100,
              m:"40px auto",
              flexDirection: {
                xs: "column",
                md: i % 2 === 0 ? "row" : "row-reverse",
              },
            }}
          >
            <div>
              <CardMedia
                sx={{ p: 2, borderRadius: 6, maxWidth:{md:1100,xs:400}, m:"0 auto" }}
                component="img"
                image={prod.image}
                alt="producto"
              />
            </div>
            <Box
              sx={{
                maxBlockSize:{md:400},
                display: "flex",
                p: {xs:1,md:10},
                flexDirection: "column",
                alignItems: { xs: "center", md: "start" },
                justifyContent: "space-between",
              }}
            >
              {prod.new ? (
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
                color={"primary"}
                fontSize={28}
                fontWeight={"700"}
                sx={{
                  textAlign: { xs: "center", md: "start" },
                  width: { xs: "53%", sm: "40%" },
                }}
              >
                {prod.name}
              </Typography>
              <Typography
                color={"primary"}
                sx={{ textAlign: { xs: "center", md: "start" } }}
              >
                {prod.description}
              </Typography>
              <Link to={`/productDetail/${prod.id}`}>
                <Button
                  color={"secondary"}
                  variant="contained"
                  style={{ borderRadius: 0 }}
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};
