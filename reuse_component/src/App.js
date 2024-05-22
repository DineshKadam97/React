import { Users } from "./Users";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Table } from "reactstrap";

//to handle the list react need a unique key tyamule virtual dom tyala easily identify karu shakto

function App() {
  var students_info = [
    { name: "Dinesh", email: "dk@gmail.com", RNo: 11 },
    { name: "Ashish", email: "ak@gmail.com", RNo: 12 },
    { name: "Ramesh", email: "Rc@gmail.com", RNo: 13 },
  ];

  return (
    <div className="App">
      <h1>List with Bootstrap Table</h1>

      {students_info.map((info, i) => (
        <Users data={info} />
      ))}
    </div>
  );
}

export default App;
