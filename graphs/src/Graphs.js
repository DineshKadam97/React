import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useState, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import Plotly from "plotly.js-dist-min";

const useStyles = makeStyles({
  actuatorDiv: { textAlign: "left" },
  actuatorInfoTitle: {
    fontSize: "1rem !important",
    fontWeight: "bold !important",
  },
});

const Graphs = (props) => {
  const { csvData } = props;

  const [xInput, setxInput] = useState([]);
  const [aCylinder, setaCylinder] = useState([]);
  const [bCylinder, setbCylinder] = useState([]);

  const [aPiston, setaPiston] = useState([]);
  const [bPiston, setbPiston] = useState([]);

  const [pressure, setpressure] = useState("Cushion Side Pressure");
  const [lateralDisplacement, setlateralDisplacement] =
    useState("Piston_Placement");

  useEffect(() => {
    if (csvData !== null) {
      console.log(csvData);
      const xValue = csvData?.data.map((item) => item.time);
      setxInput(xValue);
      const A_cylinderValues = csvData?.data.map((item) => item.A_cylinder);
      setaCylinder(A_cylinderValues);
      const B_cylinderValues = csvData?.data.map((item) => item.B_cylinder);
      setbCylinder(B_cylinderValues);

      const A_piston_Values = csvData?.data.map(
        (item) => item.PistonDisplacement
      );
      setaPiston(A_piston_Values);
      const B_Piston_Values = csvData?.data.map((item) => item.StrokeLength);
      setbPiston(B_Piston_Values);
    }
  }, [csvData]);
  const FirstGraph = () => {
    const handleChangePressure = (event) => {
      console.log(event.target.value);
      setpressure(event.target.value);
    };
    useEffect(() => {
      const trace1 = {
        x: xInput,
        y: aCylinder,
        mode: "lines",
        name: "Cushion Side Pressure",
        line: {
          color: "red",
        },
      };

      const trace2 = {
        x: xInput,
        y: bCylinder,
        mode: "lines",
        name: "Rod Side Pressure",
        line: {
          color: "blue",
        },
      };

      const data =
        pressure === "Cushion Side Pressure"
          ? [trace1]
          : pressure === "Both"
          ? [trace1, trace2]
          : [trace2];

      const layout = {
        width: 900, // Set custom width
        height: 400,
        title: pressure,
        xaxis: {
          title: "Time (sec)",
        },
        yaxis: {
          title: "Pressure (bar)",
        },
      };

      Plotly.newPlot("myDiv", data, layout);

      // Cleanup function to clear Plotly instance when component unmounts
      return () => {
        Plotly.purge("myDiv");
      };
    }, [pressure]);
    return (
      <>
        <Grid
          item
          xs={12}
          style={{
            border: "1px solid white",
            margin: "1rem",
            background: "#FFFFFF",
            padding: "1rem",
            borderRadius: "0.5rem",
            height: "43.7vh",
          }}
        >
          <Grid container item xs={12} className={classes.actuatorDiv}>
            <Grid item xs={4} style={{ zIndex: "1" }}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: "14px", // Adjust the font size as needed
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "8px 12px", // Adjust the padding to control the height
                  },
                }}
                select
                label="Select Result Type"
                size="small"
                fullWidth
                value={pressure}
                onChange={(event) => handleChangePressure(event)}
                variant="outlined"
                style={{ marginBottom: "20px" }}
              >
                <MenuItem value="Cushion Side Pressure">
                  Cushion Side Pressure
                </MenuItem>
                <MenuItem value="Rod Side Pressure ">
                  Rod Side Pressure{" "}
                </MenuItem>
                <MenuItem value="Both">Both</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
          <Grid
            item
            xs={11}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "translate(3rem, -4rem)",
            }}
          >
            <div id="myDiv" />
          </Grid>
        </Grid>
      </>
    );
  };
  const SecondGraph = () => {
    const handleLateralDisplacement = (event) => {
      console.log(event.target.value);
      setlateralDisplacement(event.target.value);
    };

    useEffect(() => {
      const trace1 = {
        x: xInput,
        y: aPiston,
        mode: "lines",
        name: "Piston_Placement",
        line: {
          color: "orange",
        },
      };

      const trace2 = {
        x: xInput,
        y: bPiston,
        mode: "lines",
        name: "Stroke Length",
        line: {
          color: "skyblue",
        },
      };

      const data =
        lateralDisplacement === "Piston_Placement"
          ? [trace1]
          : lateralDisplacement === "Both"
          ? [trace1, trace2]
          : [trace2];

      const layout = {
        width: 900, // Set custom width
        height: 400,
        title: lateralDisplacement,
        xaxis: {
          title: "Time (sec)",
        },
        yaxis: {
          title: "lateral Δs(bar)",
        },
      };

      Plotly.newPlot("myDiv1", data, layout);

      // Cleanup function to clear Plotly instance when component unmounts
      return () => {
        Plotly.purge("myDiv1");
      };
    }, [lateralDisplacement]);
    return (
      <>
        <Grid
          item
          xs={12}
          style={{
            border: "1px solid white",
            margin: "1rem",
            background: "#FFFFFF",
            padding: "1rem",
            borderRadius: "0.5rem",
            height: "43.7vh",
          }}
        >
          <Grid container item xs={12} className={classes.actuatorDiv}>
            <Grid item xs={4} style={{ zIndex: "1" }}>
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: "14px", // Adjust the font size as needed
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "8px 12px", // Adjust the padding to control the height
                  },
                }}
                select
                label="Select Result Type"
                size="small"
                fullWidth
                value={lateralDisplacement}
                onChange={(event) => handleLateralDisplacement(event)}
                variant="outlined"
                style={{ marginBottom: "20px" }}
              >
                <MenuItem value="Piston_Placement">Piston_Placement</MenuItem>
                <MenuItem value="Stroke_Length">Stroke_Length</MenuItem>
                <MenuItem value="Both">Both</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
          <Grid
            item
            xs={11}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "translate(3rem, -4rem)",
            }}
          >
            <div id="myDiv1" />
          </Grid>
        </Grid>
      </>
    );
  };

  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <FirstGraph />
      </Grid>
      <Grid item xs={12}>
        <SecondGraph />
      </Grid>
    </Grid>
  );
};

export default Graphs;
