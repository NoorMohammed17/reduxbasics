import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const increaseByValueHandler = () => {
    dispatch({ type: "increaseByValue", value: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const content = (
    <div>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByValueHandler}>IncreaseBy5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && content}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
