import { useSelector, useDispatch } from "react-redux";
import { increment, reset, decrement } from "./counterSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handelIncrement = () => {
    toast("Increment");
    dispatch(increment());
  };
  const handelDecrement = () => {
    toast("Decrement");

    dispatch(decrement());
  };
  const handelReset = () => {
    toast("Reset");
    dispatch(reset());
  };
  return (
    <>
      <ToastContainer />
      <div>
        <h1>Count : {count}</h1>
        <button onClick={handelIncrement}>Incremetn</button>
        <button onClick={handelDecrement}>Decriment</button>
        <button onClick={handelReset}>Reset</button>
      </div>
    </>
  );
};
