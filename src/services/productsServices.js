import { productInstance } from "./axiosInstance";


export const getAllProduct = async()=>{
    let data = productInstance.get("/");
      let res = await data;
      return res.data
}