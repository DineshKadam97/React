import React from 'react';
import './App.css';

class App extends React.Component
{
  constructor()
  {
    console.warn("constructor")
    super();
    this.state={value:0};
  }

  shouldComponentUpdate()
  {
    console.warn("shouldComponentUpdate")

    if(this.state.value > 3 && this.state.value < 11)
    {
      return true
    }
  }

  render()
  {
    console.warn("render")
    return(
      <div>
        <h1>{this.state.value}</h1>

        <button onClick={()=>this.setState({value:this.state.value+1})}>Update</button>
      </div>
    )
  }
}

export default App;
