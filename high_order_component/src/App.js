import React, { useState } from "react";
import "./App.css";
import { Button } from "bootstrap";

//HOC is a component which accept component as a prop and returns the component. It can be used for styling the components.

function App() {
  return (
    <div className="App">
      <HOCRed cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}

function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100 }}>
      <props.cmp />
    </h2>
  );
}

function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "orange", width: 100 }}>
      <props.cmp />
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
}

export default App;
