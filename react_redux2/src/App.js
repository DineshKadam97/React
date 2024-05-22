import "./App.css";
import { decNumber, incNumber } from "./actions/action";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Learnig React-Redux</h1>
      <button onClick={() => dispatch(incNumber())}>INCREMENT</button>
      <br /> <br />
      <h3>{mystate}</h3>
      <br />
      <br />
      <button onClick={() => dispatch(decNumber())}>DECREMENT</button>
    </div>
  );
}

export default App;
