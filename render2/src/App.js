import { useState } from 'react';
import { Users } from './Users';
import './App.css';

// state, props update zali ki render method update hote 



function App() {
  const[name,setData] = useState("Dinesh")
  return (
    <div className="App">
      <Users name ={name}/>
      <button onClick={()=>setData("Kadam")}>Update</button>
    </div>
  );
}

export default App;
