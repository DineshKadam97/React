import React from 'react';
import './App.css';

class App extends React.Component
{
  constructor()
  {
    super();
    console.warn("constructor")
    this.state = {value:0}
  }

  componentDidUpdate(preProps,preState)
  {
    console.warn("componentDidUpdate", preState.value, this.state.value)

    // if(this.state.value < 8)
    // {
    //   this.setState({value:this.state.value+1})
    // }

    if(preState.value == this.state.value)
    {
      alert("You have reached a maximum limit")
    }
  }

  render()
  {
    console.warn("render")
    return(
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={()=>this.setState({value:2})}>Update</button>
      </div>
    )
  }
}

export default App;
