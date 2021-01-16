import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ViewFaculty.css";

export default function ViewFaculty() {
  const [faculty, setFaculty] = useState();
  useEffect(() => { 
    function fetchFaculty(){
      axios.get('http://localhost:5000/api/faculty')
        .then(response => {
          setFaculty(response.data.faculty);
        }).then(err => {
          console.log(err);
        }
      );
    }
    fetchFaculty();
  }, []);
  const facultyRes = faculty ? 
    faculty.map((data, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{data.faculty_id}</td>
        <td>{data.faculty_name}</td>
        <td>
          <Button variant="light" className="button">
            <Link to={{
              pathname: "/admin/faculty/view-faculty/selected-faculty",
              state: data}}>
              View
            </Link>
          </Button>
          <Button variant="light" className="button">
            <Link to={{
              pathname: "/admin/faculty/view-faculty/assign-faculty",
              state: data}}>
              Assign
            </Link>
          </Button>
        </td>
      </tr>
    )):
    <div></div>
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
          {facultyRes}
        </tbody>
      </Table>
    </div>
  );
}
