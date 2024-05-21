import { Users } from './Users';
import './App.css';
import React from 'react';

class App extends React.Component 
{
  constructor()
  {
    super();
    this.state={status:true}
    console.warn("constructor")
  }

  render()
  {
    console.warn("render")

    return(
      <div>
        {this.state.status ? <Users/> : <h1>Component is removed</h1>}
        <button onClick={()=>this.setState({status: !this.state.status})}>Toggle</button>
      </div>
    )
  }
}

export default App;
