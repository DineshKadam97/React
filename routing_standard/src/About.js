import React, { useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";
// import "./Viewerxtension.js";
// import "./AnimationExtension";

var Autodesk = window.Autodesk;

export const Viewer = () => {
  console.log("Inside Viewer");
  const [urn, setUrn] = useState("");

  const getToken = async () => {
    const url = "https://developer.api.autodesk.com/authentication/v2/token";
    const params = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "QIYzqp5sOCLicz4bM4djnmGRvtZdLoj7",
      client_secret: "OeK4WFG5zKkRVNrW",
      scope: "data:write data:read bucket:create bucket:delete",
    });

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error fetching token:", error);
      throw error;
    }
  };

  const initializeViewer = async (urn) => {
    const token = await getToken();

    const viewerOptions = {
      env: "AutodeskProduction",
      accessToken: token,
      api: "derivativeV2",
    };

    var config3d = {
      extensions: ["ToolbarExtension", "AnimationExtension"],
    };

    var APSViewer = document.getElementById("APSViewer");
    var viewer = new Autodesk.Viewing.Private.GuiViewer3D(APSViewer, config3d);

    Autodesk.Viewing.Initializer(viewerOptions, () => {
      viewer.start();
      Autodesk.Viewing.Document.load(`urn:${urn}`, (doc) => {
        var defaultModel = doc.getRoot().getDefaultGeometry();
        viewer.loadDocumentNode(doc, defaultModel);
      });
    });
  };

  useEffect(() => {
    initializeViewer(urn);
  }, [urn]);

  const handleRenderViewer = () => {
    setUrn(
      "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Y2N0ZWNoZmx1aWR2b2x1bWVidWNrZXQvMzE0MjAyNDExODAwUE1fbGIxQkcyRC5zdHA="
    );
  };

  const handleResetViewer = () => {
    var APSViewer = document.getElementById("APSViewer");
    APSViewer.innerHTML = "";
    setUrn("");
    alert("Viewer has been reset. Thank You!");
  };

  useEffect(() => {
    handleResetViewer();
  }, []);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item md={12}>
        <Grid container spacing={2} direction="column">
          <Grid item style={{ textAlign: "center" }}>
            <h1>APS VIEWER</h1>
            <Button variant="contained" onClick={handleRenderViewer}>
              Render Viewer
            </Button>
            <Button
              variant="contained"
              onClick={handleResetViewer}
              style={{ marginLeft: "10px" }}
            >
              Reset Viewer
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <div
          id="APSViewer"
          style={{
            marginTop: "20px",
            marginRight: "20px",
            marginLeft: "20px",
            height: "680px",
            position: "relative",
          }}
        ></div>
      </Grid>
    </Grid>
  );
};
