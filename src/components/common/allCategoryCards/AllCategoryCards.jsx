import { Box } from "@mui/material";
import { CategoryCardContainer } from "../categoryCard/CategoryCardContainer";

export const AllCategoryCards = ({arrayCategory}) => {
  return (
    <Box
      sx={{
        margin: "70px auto",
        padding: 0,
        display: "grid",
        maxWidth: { lg: 1100,xs:"90%" },
        gap: 4,
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1.5fr))",
      }}
    >
      {arrayCategory?.map((category, i) => {
        return (
          <Box key={i}>
            <CategoryCardContainer
              name={category.name}
              image={category.image}
              link={category.link}
            />
          </Box>
        );
      })}
    </Box>
  );
};
