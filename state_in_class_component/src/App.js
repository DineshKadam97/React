import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component
{
  constructor()
  {
    super()
    this.state = {data:"Dinesh"};
    this.state1 = {value : 1}
  }

  UpdateData()
  {
   this.setState({data:"Kadam"}) 
  }

  UpdateValue()
  {
   this.setState({value:this.state1.value+ 3}) 
  }


 render()
 {
   return(
    <div>
      <h1>{this.state.data}</h1>
      <h1>{this.state1.value}</h1>
      <button onClick = {()=>this.UpdateData()}>Update Name</button>
      <button onClick = {()=>this.UpdateValue()}>Update Value</button>
    </div>
   ) 
 }
}

export default App;
