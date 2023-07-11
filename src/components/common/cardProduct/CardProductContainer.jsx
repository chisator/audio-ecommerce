import { useOneProduct } from "../../../hooks/fetchProduct"
import { CardProduct } from "./CardProduct"


export const CardProductContainer = () => {
  const { products } = useOneProduct("Si9KKYxrZjwLNY45wn2V");
  return (
    <>
    <CardProduct prod={products}/>
    </>
  )
}
