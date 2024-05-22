import { Grid } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <Grid conatiner spacing={4}>
      <h1 style={{ backgroundColor: "orange" }}>Block 1</h1>
      <h1 style={{ backgroundColor: "green" }}>Block 2</h1>
    </Grid>
  );
}

export default App;
