import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [status, setStatus] = useState(false)
  return (
    <div className="App">
      {
        status ? <h1>Hello Dinesh</h1> : null
      }
      {/* <button onClick={()=>setStatus(true)}>Show</button>
      <button onClick={()=>setStatus(false)}>Hide</button> */}

      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
