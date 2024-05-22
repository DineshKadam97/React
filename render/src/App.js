import React,{ useState } from 'react';
// import { Users } from './Users';
import './App.css';

// state or props update zale ki render method run hote, automatically

function App() 
{
  const [name,setName] = useState("Dinesh");

  return (
    <div className="App">
      {/* <Users name = {name}/> */}
      <button onClick = {()=>setName(name="Kadam")}>Click Me!</button>
    </div>
  );
}

export default App;
