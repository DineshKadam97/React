import React, { createRef } from "react";
import "./App.css";

// Ref jast vapru naka karan te ReactDOM shi chedchaad karto
//Ref color, font, background vagere change karnyasathi  waprtat.. rarely ch vaprava

class App extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.warn((this.inputRef.current.value = "3245"));
  }

  getVal() {
    console.warn(this.inputRef.current.value);
    this.inputRef.current.style.color = "orange";
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={() => this.getVal()}>Click Me</button>
      </div>
    );
  }
}

export default App;
