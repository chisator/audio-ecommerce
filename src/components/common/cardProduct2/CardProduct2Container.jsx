import { useOneProduct } from "../../../hooks/fetchProduct"
import { CardProduct2 } from "./CardProduct2"


export const CardProduct2Container = () => {
    const { products } = useOneProduct("7facPj5HLacX6vmyaQ3U");
  return (
    <div>
      <CardProduct2 products={products} />
    </div>
  );
}
