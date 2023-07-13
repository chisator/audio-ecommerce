import { TarjetaContainer } from "../../common/tarjeta/TarjetaContainer";
import useAllProduct from "../../../hooks/fetchProduct";
import { AllCategoryCardsContainer } from "../../common/allCategoryCards/AllCategoryCardsContainer";
import { Box, Skeleton, Stack } from "@mui/material";
import React, { Suspense } from "react";
import { CategoryNavar } from "../../common/categoryNavbar/CategoryNavar";

const Category = React.lazy(() => delayForDemo(import("./Category")));

export const CategoryContainer = () => {
  const { products, categoryName } = useAllProduct();

  return (
    <>
      <CategoryNavar categoryName={categoryName} />
      <Suspense fallback={<Loading />}>
        <Category products={products} categoryName={categoryName} />
      </Suspense>
      <AllCategoryCardsContainer />
      <TarjetaContainer />
    </>
  );
};
function Loading() {
  return (
    <Stack
      spacing={1}
      sx={{
        display: "flex",
        maxWidth: 1100,
        m: "0 auto 100px",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        flexWrap: "nowrap",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{ borderRadius: 5, minWidth: { md: 530, sm: 500, xs: "94%" } }}
        height={500}
      />
      <Box
        sx={{
          width: "100%",
          m: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "center",
          alignItems: { xs: "center", md: "start" },
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            textAlign: { xs: "center", md: "start" },
            width: { xs: 215 },
          }}
          height={21}
        />
        <Skeleton
          variant="rectangular"
          sx={{ height: { xs: 35, md: 60 } }}
          width={290}
        />
        <Skeleton
          variant="rectangular"
          sx={{ height: { xs: 35, md: 60 } }}
          width={290}
        />
        <br />
        <Skeleton
          variant="rectangular"
          sx={{
            width: "90%",
          }}
          height={20}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: "90%",
          }}
          height={20}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: "90%",
          }}
          height={20}
        />
        <br />
        <Skeleton variant="rectangular" width={160} height={48} />
      </Box>
    </Stack>
  );
}
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2500);
  }).then(() => promise);
}
