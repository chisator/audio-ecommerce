import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProduct } from "../services/productsServices";

export const useAllProduct =()=>{
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
      const getData = async () => {
        const data = await getAllProduct();
        let productByCategory = data.filter(
          (prod) => prod.category === categoryName
        );
        setProducts(productByCategory);
      };
      getData();
    }, [categoryName]);
    return{products, categoryName}
}
export function useOneProduct(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const data = await getAllProduct();
        let productByCategory = data.find(
          (prod) => prod.new === true && prod.category === "headphones"
        );
        setProducts(productByCategory);
      };
      getData();
    }, []);
    return{products}
}