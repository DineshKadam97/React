
import './App.css';
import { useState } from 'react';

function App() {
  const[name,setName] = useState("yourname");
  const[interest,setInterest] = useState("");
  const[tnc,setTnc]=useState(false)

  function getFormData(e)
  {
    console.warn(name,interest,tnc)
    e.preventDefault()
  }
  return (
    <div className="App">
      <form onSubmit={getFormData}>
        <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}></input> <br /><br />
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}></input>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
