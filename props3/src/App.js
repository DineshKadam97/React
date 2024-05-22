import { Users } from './Users';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Kd")

  function getData() {
    alert("Your name and email is diaplayed on the screen");
    <h1>"hoiii</h1>
  }

  return (
    <div className="App">
      <Users name={name} email="dk@gmail.com" data={getData} namee={() => setName("DK")} />
    </div>
  );
}

export default App;
