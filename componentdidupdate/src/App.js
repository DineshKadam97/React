import React from 'react';
import './App.css';


//componentDidUpdate state or props update zalyavar call hoto
class App extends React.Component
{
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={value:0}
  }

  componentDidUpdate(preprops,preState)
  {
    console.warn("componentDidUpdate", preState.value, this.state.value);

    // if(preState.value == this.state.value)
    // {
    //   alert("Marlich!")
    // }

    this.setState({value:this.state.value+1})
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
