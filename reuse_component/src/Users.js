import { Table } from "reactstrap";

export function Users(props) {
  return (
    <div>
      <Table stripped bordered dark>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Roll No</td>
          </tr>
          <tr>
            <td>{props.data.name}</td>
            <td>{props.data.email}</td>
            <td>{props.data.RNo}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
