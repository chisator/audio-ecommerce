import { useState } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({onAdd}) => {
    let [counter, setCounter] = useState(1)
  return (
    <div>
      <Counter counter={counter} setCounter={setCounter} onAdd={onAdd} />
    </div>
  );
};
