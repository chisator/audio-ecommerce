import { Box, Skeleton, Stack } from "@mui/material";
import "./Category.css";
import ProductContainer from "../../common/product/ProductContainer";
import { Suspense } from "react";

export default function Category({ products }) {
  return (
    <div>
      {products.map((prod, i) => {
        return (
          <Box key={prod.id}>
            <Suspense fallback={<Loading />}>
              <ProductContainer prod={prod} i={i} />
            </Suspense>
          </Box>
        );
      })}
    </div>
  );
}

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
