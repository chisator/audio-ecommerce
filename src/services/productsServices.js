import { productInstance } from "./axiosInstance";


export const getAllProduct = async()=>{
    let data = productInstance.get("/");
      let res = await data;
      return res.data
}
export const getProductById = async(id)=>{
  let data = productInstance.get(`/${id}`)
  let res = await data
  return res.data
}