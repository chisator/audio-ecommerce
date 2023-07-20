import { AllCategoryCardsContainer } from "../../common/allCategoryCards/AllCategoryCardsContainer";
import { TarjetaContainer } from "../../common/tarjeta/TarjetaContainer";
import { CategoryNavar } from "../../common/categoryNavbar/CategoryNavar";
import useAllProduct from "../../../hooks/fetchProduct";

import Category from "./Category.jsx";

export const CategoryContainer = () => {
  const { products, categoryName } = useAllProduct();

  return (
    <>
      <CategoryNavar categoryName={categoryName} />

      <Category products={products} />

      <AllCategoryCardsContainer />
      <TarjetaContainer />
    </>
  );
};

/* function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2500);
  }).then(() => promise);
} */
