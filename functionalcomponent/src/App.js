//import logo from './logo.svg';
import './App.css';
import {User} from './User';
import User3 from './User';

function App() {
  return (
    <div className="App"> 
      <User/>
      <User2/>   
      <User3/> 
    </div>
  );
}

//you can directly write the functional component in the same file

function User2()
{
  return <h1>Modi hai to mumkin hain!!</h1>
}

export default App;
