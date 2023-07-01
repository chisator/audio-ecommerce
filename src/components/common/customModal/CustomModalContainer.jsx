import { useDispatch, useSelector } from "react-redux";
import { CustomModal } from "./CustomModal";
import { useProductById } from "../../../hooks/fetchProduct";
import { useEffect } from "react";
import { getTotalPrice } from "../../../store/cartSlice";

export const CustomModalContainer = ({ open, handleClose }) => {
  const { onAdd} = useProductById();
  const { cart, totalPrecio } = useSelector((store) => store.cartSlice);
  const dispatch=useDispatch()
 useEffect(() => {
   dispatch(getTotalPrice());
 }, [cart, dispatch]);
  return (
    <CustomModal
      open={open}
      handleClose={handleClose}
      cart={cart}
      onAdd={onAdd}
      dispatch={dispatch}
      totalPrecio={totalPrecio}
    />
  );
};
