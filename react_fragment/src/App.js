import "./App.css";
import { Users } from "./Users";
import { Table } from "reactstrap";
import React from "react";

//react frgament is used to wrap many elements or components to avoid extra div tags
// we can use fragment in any component
//in fragment we can not use className
//in fragment we can use key
function App() {
  return (
    <div className="App">
      <Table>
        <tbody>
          <tr>
            <Users />
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
