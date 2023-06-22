import { Category } from "./Category";
import { TarjetaContainer } from "../../common/tarjeta/TarjetaContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProduct } from "../../../services/productsServices";

export const CategoryContainer = () => {
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
  return (
    <>
      <Category products={products} />
      <TarjetaContainer />
    </>
  );
};
