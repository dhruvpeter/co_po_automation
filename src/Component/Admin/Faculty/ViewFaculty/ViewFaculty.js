import React from "react";
import axios from 'axios';
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ViewFaculty.css";

export default function ViewFaculty() {
  const faculty = [
    {
      id: "1000",
      name: "Sumesh Divakaran",
    },
    {
      id: "1001",
      name: "Preethi L",
    },
    {
      id: "1002",
      name: "Sreelal",
    },
  ];
  return (
    <div className="container-fluid">
      <div>
        <h3>Faculty Details</h3>
      </div>
      <Table striped bordered hover variant="dark" className="viewFacultyTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>
                <Button variant="light" className="button">
                  <Link to="/admin/faculty/view-faculty/selected-faculty">
                    View
                  </Link>
                </Button>
                <Button variant="light" className="button">
                  <Link to="/admin/faculty/view-faculty/assign-faculty">
                    Assign
                  </Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

axios.get('/user', {params: {

}}).then((res) => {
  console.log(res);
}).then((err) => {
  console.log(err);
})
