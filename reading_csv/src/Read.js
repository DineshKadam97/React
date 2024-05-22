import React from "react";

export function Read() {
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const contents = e.target.result;
      console.log("File contents:", contents);
      // You can parse the CSV data or perform other operations here
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <h2>Upload a CSV File</h2>
      <input type="file" onChange={handleFileInputChange} />
    </div>
  );
}
