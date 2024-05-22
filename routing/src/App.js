import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/home">Home Page</Link>
        <br /> <br />
        <Link to="/about">About Page</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export default App;
