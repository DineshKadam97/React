import "./App.css";
import { Users } from "./Users";

// apan function as a props pathvto karan multiple components sathi punha punha funxtion lihaychi garaj nahi
// ekech component punha re render kel tari ekach functin aslyamule te fast hot
// props can be transferred to super child component also(child cha child)

function App() {
  function getData() {
    alert("Hello from parent component");
    console.log("HIII");
  }

  return (
    <div className="App">
      <h1>
        <Users data={getData} />
      </h1>
    </div>
  );
}

export default App;
