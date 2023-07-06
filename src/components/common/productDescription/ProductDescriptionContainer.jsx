import { ProductDescription } from "./ProductDescription"


export const ProductDescriptionContainer = ({ prod, onAdd, precio, posicion, stock }) => {
  return (
    <div>
      <ProductDescription
        prod={prod}
        precio={precio}
        onAdd={onAdd}
        posicion={posicion}
        stock={stock}
      />
    </div>
  );
};
