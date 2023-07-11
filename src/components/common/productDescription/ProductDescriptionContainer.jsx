import { ProductDescription } from "./ProductDescription"


export const ProductDescriptionContainer = ({
  prod,
  onAdd,
  precio,
  posicion,
  stock,
  colorLetras,
  tamañoLetra,
  buttonColor,
}) => {
  return (
    <div>
      <ProductDescription
        prod={prod}
        precio={precio}
        onAdd={onAdd}
        posicion={posicion}
        stock={stock}
        colorLetras={colorLetras}
        tamañoLetra={tamañoLetra}
        buttonColor={buttonColor}
      />
    </div>
  );
};
ProductDescriptionContainer.defaultProps = {
  colorLetras: "primary.main",
  tamañoLetra: 38,
  precio: false,
  onAdd: null,
  posicion: "center",
  buttonColor: "secondary",
};