import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../reduxStore/counterSlice";

const ReduxCounter = () => {
  const value = useSelector((state) => state?.reduxCounter?.value || 0);

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1>Redux Counter Exmple</h1>
      <div className="flex gap-4 font-medium">
        <h1>Count : </h1>
        <h1>{value}</h1>
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default ReduxCounter;
