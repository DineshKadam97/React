import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment/Decrement counter</h1>
      <h4>using React-Redux</h4>
      <h4>{myState}</h4>
      <button onClick={() => dispatch(incNumber(5))}>INCREMENT</button>
      <button onClick={() => dispatch(decNumber())}>DECREMENT</button>
      <br />
    </div>
  );
}

export default App;
