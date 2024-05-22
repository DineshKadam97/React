import { Table } from "reactstrap";
import "./App.css";

function App() {
  var students = [
    {
      name: "Dinesh",
      email: "dk@gmail.com",
      Address: [
        { Home: 34, Road: "Basmat Road", city: "Parbhani" },
        { Home: 35, Road: "Jintur Road", city: "Parbhani" },
        { Home: 36, Road: "Pathari Road", city: "Parbhani" },
      ],
    },
    {
      name: "Ramesh",
      email: "Rc@gmail.com",
      Address: [
        { Home: 34, Road: "Nashik Road", city: "Kolhapur" },
        { Home: 35, Road: "Pune Road", city: "Kolhapur" },
        { Home: 36, Road: "Satara Road", city: "Karhad" },
      ],
    },
    {
      name: "Chirag",
      email: "CC@gmail.com",
      Address: [
        { Home: 34, Road: "Pune Road", city: "Ahilyanagar" },
        { Home: 35, Road: "Nashik Road", city: "Ahilyanagar" },
        { Home: 36, Road: "Navtara Road", city: "Ahilyanagar" },
      ],
    },
  ];

  return (
    <div className="App">
      <Table striped bordered dark>
        <tbody>
          <tr>
            <td>Sr.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>

          {students.map((info, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{info.name}</td>
              <td>{info.email}</td>
              <td>
                <Table striped bordered dark>
                  <tbody>
                    {info.Address.map((ad, g) => (
                      <tr key={g}>
                        <td>{ad.Home} </td>
                        <td>{ad.Road} </td>
                        <td>{ad.city} </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
