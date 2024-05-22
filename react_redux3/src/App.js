import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setBlueColor, setOrangeColor } from "./actions/action";

function App() {
  const backgroundColor = useSelector(
    (state) => state.changeColor.backgroundColor
  );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1 style={{ backgroundColor }}>Harry Potter</h1>
      <button onClick={() => dispatch(setBlueColor())}>BLUE</button>
      <button onClick={() => dispatch(setOrangeColor())}>ORANGE</button>
    </div>
  );
}

export default App;
