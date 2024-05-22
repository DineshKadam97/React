import logo from './logo.svg';
import './App.css';
import Employee from './Employee';

function App() {
  return (
    <div className="App">
      <Employee name="Dinesh" email = "Dinesh.k@student.com"/>
      <Employee name = "Rohit" email = "Rohit.p@student.com"/>
      <Employee name = "Ramesh" email = "Ramesh.C@student.com"/>
    </div>
  );
}

export default App;
