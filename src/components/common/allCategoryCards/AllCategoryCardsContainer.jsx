import { AllCategoryCards } from "./AllCategoryCards";
import img2 from "../../../assets/img/image-category-card(1).png";
import img1 from "../../../assets/img/image-category-card(2).png";
import img3 from "../../../assets/img/image-category-card(3).png";
export const AllCategoryCardsContainer = () => {
  const arrayCategory = [
    {
      name: "HEADPHONES",
      image: img1,
      link: "/category/headphones",
    },
    {
      name: "SPEAKERS",
      image: img2,
      link: "/category/speakers",
    },
    {
      name: "EARPHONES",
      image: img3,
      link: "/category/earphones",
    },
  ];
  return (
    <div>
      <AllCategoryCards arrayCategory={arrayCategory} />
    </div>
  );
};
