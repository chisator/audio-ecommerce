import { Category } from "./Category";
import { TarjetaContainer } from "../../common/tarjeta/TarjetaContainer";
import { useAllProduct } from "../../../hooks/fetchProduct";

export const CategoryContainer = () => {
  const {products, categoryName} = useAllProduct()
  
  return (
    <>
      <Category products={products} categoryName={categoryName} />
      <TarjetaContainer />
    </>
  );
};
