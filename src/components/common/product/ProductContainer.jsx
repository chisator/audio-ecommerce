import Product from "./Product";

export default function ProductContainer({ prod, i }) {
  return (
    <>
      <Product prod={prod} i={i} />
    </>
  );
}
