import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decNumber, incNumber } from "./actions";

function App() {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>{mystate}</p>
      <button onClick={() => dispatch(incNumber())}>INC</button>
      <button onClick={() => dispatch(decNumber())}>DEC</button>
    </div>
  );
}

export default App;
