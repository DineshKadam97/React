import React, {useState}from 'react';
import './App.css';

//adhi constructor mag render aani tyanantr componentDidMount
// componentDidMount is used to call APIs

class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {name:"Dinesh"}
    console.warn("constructor")
  }
  componentDidMount()
  {
    console.warn("componentDidMount")
  }

  render()
  {
    console.warn("render")

    return(
      <div>
       
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.setState({name:this.state.name+"DK"})}>Update</button>
      </div>
    )
  }
}

export default App;
