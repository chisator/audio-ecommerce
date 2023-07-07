import { useOneProduct } from "../../../hooks/fetchProduct";
import { NewProductHome } from "./NewProductHome";

export const NewProductHomeContainer = () => {
  const { products } = useOneProduct("mqoaOS19PwImqZq825bj");
  return <NewProductHome prod={products} />;
};
