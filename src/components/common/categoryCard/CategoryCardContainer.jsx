import { CategoryCard } from "./CategoryCard"

export const CategoryCardContainer = ({ name, image, link }) => {
  return (
    <>
      <CategoryCard name={name} image={image} link={link} />
    </>
  );
};
