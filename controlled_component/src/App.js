import React, { useState } from "react";
import "./App.css";

// controlled component means asa component jyachya madhil input values hya hooks {useState} use karun change kartat

function App() {
  const [value, setValue] = useState("123");
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue({ value: e.target.value })}
      ></input>
      <h1>{value}</h1>
    </div>
  );
}

export default App;
