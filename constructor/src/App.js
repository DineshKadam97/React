import { Component } from 'react';
import './App.css';


//constructor is also a life cycle method
// adhi constructor madhey jato aani bagh baki saglikde

class App extends Component
{
  constructor()
  {
    super();
    this.state={name:"Dinesh"}
  }

  render()
  {
    return(
    <div >
      <h1 text = {{color:"red"}}>Hello World</h1>
      <h1>{this.state.name}</h1>
      <button onClick = {()=>this.setState({name:"Kadam"})}>Click</button>
      
      <button onClick={()=>this.setState({name:this.state.name+"Cool"})}>Click Again</button>
    </div>)
  }
}

export default App;
