import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/slices/counterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.value);
  console.log(count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <h1>{count}</h1>
      <br></br>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Home;
