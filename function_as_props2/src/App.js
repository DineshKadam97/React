import { Users } from './Users';
import { useState } from 'react';
import './App.css';

function App() {
  const[name,setName] = useState("Dinesh")
  const[EID,setEID] = useState(108)

  function getInfo()
  {
    return(
      <div>
        <h1>Employee Information</h1>
        <h1>Name : {name}</h1>
        <h1>EID : {EID}</h1>

        <button onClick={()=>setName("Ashish")}>Update Name</button>
        <button onClick={()=>setEID(109)}>Update EID</button>
      </div>
    )
  }
  return (
    <div className="App">
      <Users data = {getInfo} />
    </div>
  );
}

export default App;
