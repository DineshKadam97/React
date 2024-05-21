import React from "react";
import { Button } from "react-bootstrap";
import { Stack, Alert } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bootstrap demo</h1>
      <Button onClick={() => alert("hello")}>Click Me!</Button>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>

      <Alert>
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    </div>
  );
}

export default App;
