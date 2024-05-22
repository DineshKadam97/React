import { useState } from 'react';
import './App.css';

//variable change kelyanantr component rerender hot nahi tyamule aapan state vaprto!
//state is data container in which we can store any data like array, object etc,
//state public aste, pan ti baher vapru naye =>not a good programming practice

function App() {
  const [data, setData] = useState("Dinesh")
  const[data1, setValue] = useState(1)

  function UpdateData()
  {
    setData(data+"m")
  }

  function UpdateValue()
  {
    setValue(data1+1)
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <h1>{data1}</h1>
      <button onClick = {UpdateData}>Update Data</button>
      <button onClick = {UpdateValue}>Update Value</button>
      <like button></like>
    </div>
  );
}

export default App;
