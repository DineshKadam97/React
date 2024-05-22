import React, { useState } from "react";
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
  createData("John", "Doe", "John Doe", "E12345"),
  createData("Jane", "Smith", "Jane Smith", "E67890"),
  createData("Alice", "Johnson", "Alice Johnson", "E24680"),
  createData("Bob", "Williams", "Bob Williams", "E13579"),
  createData("Eve", "Brown", "Eve Brown", "E98765"),
];

const InputField = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter text here"
      onChange={onChange}
      style={{ marginLeft: 10 }}
    />
  );
};

export default function FilterableTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rows, setRows] = useState(initialRows);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    filterRows(e.target.value);
  };

  const filterRows = (value) => {
    const filteredRows = initialRows.filter((row) =>
      row.firstName.toLowerCase().startsWith(value.toLowerCase())
    );
    setRows(filteredRows);
  };

  return (
    <div>
      <InputField onChange={handleInputChange} />
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
      </TableContainer>
    </div>
  );
}
