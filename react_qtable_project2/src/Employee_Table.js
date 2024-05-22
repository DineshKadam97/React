import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(firstName, lastName, fullName, EID) {
  return { firstName, lastName, fullName, EID };
}

const initialRows = [
  createData("Dinesh", "Kadam", "Dinesh Kadam", "E12345"),
  createData("Kunal", "More", "Kunal More", "E67890"),
  createData("Ashish", "Kamble", "Ashish Kamble", "E24680"),
  createData("Chirag", "Pandkar", "Chirag Pandkar", "E13579"),
  createData("Ramesh", "Choudhari", "Ramesh Choudhari", "E98765"),
  createData("Rohit", "Patil", "Rohit Patil", "E98766"),
  createData("Nilprasad", "Birajdar", "Nilprasad Birajdar", "E98767"),
];

const InputField = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter your name here"
      onChange={onChange}
      style={{ marginLeft: 20 }}
    />
  );
};

export default function TableWithInput() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [rows, setRows] = React.useState(initialRows);

  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);

    const filteredRows = initialRows.filter((row) =>
      row.firstName.toLowerCase().startsWith(inputValue)
    );
    setRows(filteredRows);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>EID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.firstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.EID}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>{" "}
      <br />
      <InputField onChange={handleInputChange} />
    </div>
  );
}
