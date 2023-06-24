import { Product } from "./Product"


export const ProductContainer = ({ prod,i }) => {
  return (
    <div>
      <Product prod={prod} i={i} />
    </div>
  );
};
