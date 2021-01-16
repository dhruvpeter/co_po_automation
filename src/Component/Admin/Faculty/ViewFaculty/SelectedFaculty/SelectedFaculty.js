import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SelectedFaculty() {
  const location = useLocation().state;
  const [faculty, setFaculty] = useState({
    id: location.faculty_id,
    name: location.faculty_name,
    department: location.dept_name,
    email: location.faculty_email,
  });

  function Submit(e) {
    e.preventDefault();
    console.log("Submit Button clicked.");
  }

  function Delete(e) {
    e.preventDefault();
    console.log("Delete Button clicked.");
  }

  function Back(e) {
    e.preventDefault();
    console.log("Back Button clicked.");
  }
  return (
    <div className="container-fluid">
      <div className="form">
        <Form>
          <Form.Group>
            <Form.Label>Faculty Id</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={faculty.id}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={faculty.name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              name="dob"
              value={faculty.department}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={faculty.email}
            />
          </Form.Group>
        </Form>
      </div>

      <div>
        <Button variant="dark" onClick={Back}>
          <Link to="/admin/faculty/view-faculty">Back</Link>
        </Button>{" "}
        <Button variant="primary" onClick={Delete}>
          Delete
        </Button>{" "}
        <Button variant="primary" onClick={Submit}>
          Save
        </Button>
      </div>
    </div>
  );
}
