import { useState } from "react";
import Example3 from "./Example3";

export default function Example2(){
  const [number, setNumber] = useState(0);

  function onIncrement(){
    setNumber(number + 1);
  }
  function onDecrement(){
    setNumber(number - 1 );
  }

  return (
    <div className="Example2">
      <button onClick={onDecrement}>-</button>
      <Example3 number={number} onIncrement={onIncrement} />
    </div>
  )
}
