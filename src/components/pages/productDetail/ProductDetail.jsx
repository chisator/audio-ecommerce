import { Typography } from "@mui/material"
import { TarjetaContainer } from "../../common/tarjeta/TarjetaContainer"
import { CounterContainer } from "../../common/counter/CounterContainer"


export const ProductDetail = ({product, onAdd}) => {
  return (
    <div>
      <Typography color={"primary"}>{product.name}</Typography>
      <Typography color={"primary"}>{product.description}</Typography>
      <CounterContainer onAdd={onAdd} />
      <TarjetaContainer />
    </div>
  );
}
