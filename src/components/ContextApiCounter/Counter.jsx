import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

const Counter = () => {
  const {count, increment, decrement} = useContext(CounterContext);
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="flex gap-4 font-medium">
        <h1>Count : </h1>
        <h1>{count}</h1>
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
