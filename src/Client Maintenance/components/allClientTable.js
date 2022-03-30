import { Table } from "react-bootstrap";
import { useState } from "react";
import data from "../data.json";

const AllClientTable = () => {
  const [currentData, setCurrentData] = useState(data);

  return (
    <div>
      <div>
        <input placeholder="search" />
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Client#</th>
            <th>Client</th>
            <th> Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => {
            return (
              <tr>
                <td>{item.c_num}</td>
                <td>{item.Client}</td>
                <td>{item.c_Name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default AllClientTable;
