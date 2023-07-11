import { useOneProduct } from "../../../hooks/fetchProduct";
import { NewProductHome } from "./NewProductHome";

export const NewProductHomeContainer = () => {
  const { products } = useOneProduct("j3DDrqiZ16UPRFw3liGn");
  return <NewProductHome prod={products} />;
};
