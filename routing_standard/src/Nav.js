import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div>
      <button onClick={() => (window.location.href = "/")}>Home Page</button>
      <br />
      <button onClick={() => (window.location.href = "/viewer")}>
        About Page
      </button>
    </div>
  );
}
