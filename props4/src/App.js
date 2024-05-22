import logo from './logo.svg';
import './App.css';
import Child from './Child';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  function showInfo() {
    return (
      <div>
        Inside showInfo
      </div>
    )
  }

  return (
    <div className="App">
      <Child value={value} increase={() => setValue(value + 1)} decrease={() => setValue(value - 1)} show={showInfo()} />
    </div>
  );
}

export default App;
