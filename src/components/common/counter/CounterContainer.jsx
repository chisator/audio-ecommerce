import { useState } from "react";
import { Counter } from "./Counter";

import { useDispatch } from "react-redux";

export const CounterContainer = ({
  onAdd,
  addBoton,
  ancho,
  anchocontador,
  id,
  quantity,
  stock,
}) => {
  const dispatch = useDispatch();
  let [counter, setCounter] = useState(1);
  return (
    <div>
      <Counter
        counter={counter}
        stock={stock}
        setCounter={setCounter}
        onAdd={onAdd}
        addBoton={addBoton}
        ancho={ancho}
        anchocontador={anchocontador}
        id={id}
        quantity={quantity}
        dispatch={dispatch}
      />
    </div>
  );
};
