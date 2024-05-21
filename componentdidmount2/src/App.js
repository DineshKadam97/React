import React from 'react';
import { useState } from 'react';
import './App.css';


//componentDidMount sagal alyavar run hotot(sagl mhnnje html,css baki dependencies)
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {email:"dk@bhos.com"}
    console.warn("Constructor")
  }

  render()
  {
    console.warn("render");
    //this.setState({email:"bhos@dk.com"})
    return(   
      <div> 
        <h1>componentdidmount</h1>
        <h1>Email : {this.state.email}</h1>
        <button onClick={()=>this.setState({email:"bhos@dk.com"})}>Update</button>
      </div>
    )
  }

  componentDidMount()
  {
    console.warn("componentDidMount");
  }
}

export default App;
