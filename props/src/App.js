import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React,{useState} from 'react';

// props are like parameters which can be sent to the component.
// we can change the props only in the parent component i.e. the component from which we sent.

function App() {
  const[name,setName] = useState("Dinu")

  return (
    <div className="App">
      <Student name ={name} email = "dinesh.k@student.com"/>
      <button onClick = {()=>setName("Dinesh")}>Update Name</button>

      <Student name = "Rohit" email = "Rohit.p@student.com"/>

      <Student name = "Ramesh" email = "Ramesh.C@student.com"/>
    </div>
  );
}

export default App;
