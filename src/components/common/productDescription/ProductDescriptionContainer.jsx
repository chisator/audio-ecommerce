import { ProductDescription } from "./ProductDescription"


export const ProductDescriptionContainer = ({ prod, onAdd, precio, posicion }) => {
  return (
    <div>
      <ProductDescription
        prod={prod}
        precio={precio}
        onAdd={onAdd}
        posicion={posicion}
      />
    </div>
  );
};
