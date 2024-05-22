import React, { useEffect, useState } from "react";

const Viewer = () => {
  const [designs, setDesigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDesigns = async () => {
      setIsLoading(true);
      try {
        // Fetch designs from Fusion 360 API
        const accessToken = await getAccessToken();
        const designs = await fetchDesignsFromAPI(accessToken);
        setDesigns(designs);
      } catch (error) {
        console.error("Error fetching designs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDesigns();
  }, []);

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

  const fetchDesignsFromAPI = async (accessToken) => {
    // Fetch designs from Fusion 360 API
    // Replace with your API endpoint
    const endpoint = "https://developer.api.autodesk.com/designs";
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    return data.designs;
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {designs.map((design, index) => (
            <li key={index}>{design.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Viewer;
