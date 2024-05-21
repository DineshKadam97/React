import logo from './logo.svg';
import './App.css';

function App() {
  
  var data = "Narendra Modi";
  function Election()
  {
    data = "Modi's gonna win!!";
    alert(data)
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={()=>Election()}>Click Me</button>

      <button onClick = {()=>alert("Jay Shree Ram!!")}>Click</button>
    </div>
  );
}

export default App;
