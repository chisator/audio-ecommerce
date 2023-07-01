import { ProductDetail } from "./ProductDetail"
import { useProductById } from "../../../hooks/fetchProduct"

export const ProductDetailContainer = () => {
  const { onAdd, product  } = useProductById();
  return (
    <ProductDetail product={product} onAdd={onAdd} />
  )
}
