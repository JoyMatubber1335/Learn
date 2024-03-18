// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementCounterAction, incrementCounterAction, resetCounterAction } from "../redux/action/counterAction";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  console.log(count);
  const dispatch = useDispatch();
  const handelIncrement = () => {
    dispatch(incrementCounterAction());
  };
  const handelDecrement = () => {
    dispatch(decrementCounterAction());
  };
  const handelReset = () => {
    dispatch(resetCounterAction());
  };
  return (
    <div>
      {" "}
      <h1>Count is :{count}</h1>
      <button onClick={handelIncrement}>Increment</button>
      <button onClick={handelDecrement}>Decriment</button>
      <button onClick={handelReset}> Reset</button>
      <p></p>
    </div>
  );
};
