import './App.css';
import User from './User';

// we can create a class component inside the same file

// we can create a functional component inside another component

//we can use angular and react together as react is a library

import React, {Component} from 'react';

function App() {
  function User3()
  {
    return <h1>Bolo Bajarang Bali ki jay1!!</h1>
  }
  return (
    <div className="App">
      <User/>
      <User2/>
      <User3/>
    </div>
  );
}

class User2 extends Component
{
    render()
    {
        return <h1>Pawanputra Hanuman ki jay!!
        </h1>
    }
}

export default App;
