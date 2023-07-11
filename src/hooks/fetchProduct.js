import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { db } from "../firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
} from "firebase/firestore";

export const useAllProduct = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    /* const getData = async () => {
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
    getData(); */
    let refCollection = collection(db, "products");
    let filteredCollection = query(
      refCollection,
      where("category", "==", categoryName)
    );
    const getData = async () => {
      let res = await getDocs(filteredCollection);
      let productFinal = res.docs.map((prod) => {
        return { ...prod.data(), id: prod.id };
      });
      productFinal.sort(function (a) {
        if (a.new == false) {
          return 1;
        } else {
          return -1;
        }
      });
      setProducts(productFinal);
    };
    getData();
  }, [categoryName]);
  return { products, categoryName };
};
export const useOneProduct = (id) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
    const getData = async () => {
      let res = await getDoc(refDoc);
      setProducts({ ...res.data(), id: res.id });
      /* const data = await getAllProduct();
      let productByCategory = data.find(
        (prod) => prod.new === true && prod.category === "headphones"
      );
      setProducts(productByCategory); */
    };
    getData();
  }, [id]);
  return { products };
};
export const useProductById = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    let refCollection = collection(db, "products");
    /* if (id) {
      
      let getData = async () => {
        let data = await getProductById(id);
        setProduct(data);
      };
      getData();
    } */
    if (id) {
      let refDoc = doc(refCollection, id);
      const getData = async () => {
        let res = await getDoc(refDoc);
        setProduct({ ...res.data(), id: res.id });
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
