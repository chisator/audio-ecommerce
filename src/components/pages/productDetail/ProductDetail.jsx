import { ButtonBack } from "../../common/buttonBack/ButtonBack";
import { Product } from "../../common/product/Product";
import { Box, CardMedia, Grid, Typography } from "@mui/material";

export const ProductDetail = ({ product, onAdd }) => {
  return (
    <div>
      <ButtonBack />
      <Product prod={product} stock={product.stock} precio={true} onAdd={onAdd} posicion={"start"} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          flexDirection: "column",
          m: "auto",
          maxWidth: "1100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 15,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width:{md:"60%"},
              gap: 5,
            }}
          >
            <Typography
              variant="h4"
              fontSize={{ xs: 24, sm: 32 }}
              fontWeight={700}
            >
              FEATURES
            </Typography>
            <Typography
              lineHeight={"25px"}
              fontSize={15}
              fontWeight={500}
              sx={{ opacity: "50%", whiteSpace:"pre-line"}}
            >
              {product.features}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "column" },
              gap: { xs: 5, sm: 25, md: 5 },
            }}
          >
            <Typography
              variant="h4"
              fontSize={{ xs: 24, sm: 32 }}
              fontWeight={700}
            >
              IN THE BOX
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {product.includes?.map((a, i) => {
                return (
                  <Box key={i} sx={{ display: "flex", gap: 3 }}>
                    <Typography
                      fontWeight={700}
                      fontSize={15}
                      sx={{ color: "secondary.main" }}
                    >
                      {a.quantity}x
                    </Typography>
                    <Typography
                      fontSize={15}
                      fontWeight={500}
                      sx={{ opacity: "50%" }}
                    >
                      {a.item}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            width: "auto",
            m: "auto",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            flexWrap: "nowrap",
          }}
        >
          <Grid
            container
            item
            xs={12}
            sm={6}
            sx={{
              justifyContent: "space-between",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: { xs: 174, md: 280 },
                maxWidth: { xs: "90%", md: 445 },
                borderRadius: 2,
              }}
              image={product.gallery?.first}
              alt="modelo"
            />
            <CardMedia
              component="img"
              sx={{
                mt: "16px",
                height: { xs: 174, md: 280 },
                maxWidth: { xs: "90%", md: 445 },
                borderRadius: 2,
              }}
              image={product.gallery?.second}
              alt="modelo"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={11}
            sx={{
              width: "100%",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: { xs: 360, md: 585 },
                maxWidth: { xs: "90%", md: "97%" },
                borderRadius: 2,
              }}
              image={product.gallery?.third}
              alt="modelo"
            />
          </Grid>
        </Grid>
      </Box>
      
    </div>
  );
};
