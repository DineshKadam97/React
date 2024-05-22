import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const[data,setData] = useState(null)
  const[print,setPrint] = useState(false)

  function ShowData(val)
  {
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
     {
       print ?  <h1>{data}</h1> : null
     }
      <input type = "text" onChange={ShowData}></input>

      <button onClick = {()=>setPrint(true)}>Show</button>
    </div>
  );
}

export default App;
