import "./App.css";
import { Nav } from "./Nav";
import { Home } from "./Homes";
import { Viewer } from "./About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/viewer" element={<Viewer />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
