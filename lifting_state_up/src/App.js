import { Users } from "./Users";
import "./App.css";

function App() {
  function Happy(info) {
    console.log(info);
    // return <h1>{info.name}</h1>;
  }

  return (
    <div className="App">
      <Users data={Happy} />
    </div>
  );
}

export default App;
