import Users from "./Users";
import React, { useRef } from "react";
import "./App.css";

//button eka component madhey aani changes karayche dusrya component madhey asha veles forwadRef waapratat

function App() {
  let inputRef = useRef(null);
  function handleComponent() {
    console.warn("function is called");
    inputRef.current.value = "1000";
    inputRef.current.style.color = "orange";
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <Users ref={inputRef} />

      <button onClick={handleComponent}>Handle input</button>
    </div>
  );
}

export default App;
