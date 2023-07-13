import { Product } from "./Product"


export default function ProductContainer({ prod,i }){
  return (
    <div>
      <Product prod={prod} i={i} />
    </div>
  );
}
