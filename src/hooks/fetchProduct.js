import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProduct, getProductById } from "../services/productsServices";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export const useAllProduct = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllProduct();
      let productByCategory = data.filter(
        (prod) => prod.category === categoryName
      );

      productByCategory.sort(function (a) {
        if (a.new == false) {
          return 1;
        } else {
          return -1;
        }
      });

      setProducts(productByCategory);
    };
    getData();
  }, [categoryName]);
  return { products, categoryName };
};
export function useOneProduct() {
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
  return { products };
}
export const useProductById = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      let getData = async () => {
        let data = await getProductById(id);
        setProduct(data);
      };
      getData();
    }
  }, [id]);
  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    dispatch(addToCart(data));
  };
  return { onAdd, product };
};
