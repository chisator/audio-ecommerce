import { ProductDetail } from "./ProductDetail";
import { useProductById } from "../../../hooks/fetchProduct";
import { AllCategoryCardsContainer } from "../../common/allCategoryCards/AllCategoryCardsContainer";
import { TarjetaContainer } from "../../common/tarjeta/TarjetaContainer";

export const ProductDetailContainer = () => {
  const { onAdd, product } = useProductById();
  return (
    <>
      <ProductDetail product={product} onAdd={onAdd} />
      <AllCategoryCardsContainer />
      <TarjetaContainer />
    </>
  );
};
