import { Category } from "./Category";
import { TarjetaContainer } from "../../common/tarjeta/TarjetaContainer";
import { useAllProduct } from "../../../hooks/fetchProduct";
import { AllCategoryCardsContainer } from "../../common/allCategoryCards/AllCategoryCardsContainer";

export const CategoryContainer = () => {
  const {products, categoryName} = useAllProduct()
  
  return (
    <>
      <Category products={products} categoryName={categoryName} />
      <AllCategoryCardsContainer />
      <TarjetaContainer />
    </>
  );
};
