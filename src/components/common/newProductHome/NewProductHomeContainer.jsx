import { useOneProduct } from "../../../hooks/fetchProduct";
import { NewProductHome } from "./NewProductHome";

export const NewProductHomeContainer = () => {
  const {products}=useOneProduct()
  return <NewProductHome prod={products} />;
};
