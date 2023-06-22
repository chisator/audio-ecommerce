import { useParams } from "react-router-dom"
import { ProductDetail } from "./ProductDetail"
import { useEffect, useState } from "react"
import { getProductById } from "../../../services/productsServices"


export const ProductDetailContainer = () => {
  const {id} = useParams()
  const [product, setProduct]= useState({})
  useEffect(()=>{
    let getData = async ()=>{
      let data = await getProductById(id)
      setProduct(data)
    }
    getData()
  },[id])
  const onAdd = (cantidad)=>{
    let data = {
      ...product,
      quantity:cantidad
    };
    console.log(data,"se agrego")
  }
  return (
    <ProductDetail product={product} onAdd={onAdd} />
  )
}
