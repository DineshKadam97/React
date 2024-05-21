import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { value: 12 };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value} // Use this.state.value instead of this.value
          onChange={(e) => this.setState({ value: e.target.value })} // Pass an object to setState
        ></input>
        <h1>{this.state.value}</h1>{" "}
        {/* Use this.state.value instead of this.value */}
      </div>
    );
  }
}

export default App;
