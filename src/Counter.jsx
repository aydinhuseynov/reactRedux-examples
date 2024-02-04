import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount} from "./counterSlice";

export function Counter ()  {
  const count = useSelector((state) => state.abc.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        INCREMENT BY 10
      </button>
    </div>
  );
}

