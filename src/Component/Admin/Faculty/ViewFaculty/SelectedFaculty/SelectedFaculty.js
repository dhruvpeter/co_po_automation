import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SelectedFaculty() {
  const [faculty, setFaculty] = useState({
    id: "TVE18",
    name: "Sreelal",
    dob: "12-12-1983",
    address: "abc xyz blz blz blz",
    gender: "M",
    contact: "9876543210",
    course: ["Course1", "Course2"],
  });

  function Submit(e) {
    e.preventDefault();
    console.log("Submit Button clicked.");
  }

  function Delete(e) {
    e.preventDefault();
    console.log("Delete Button clicked.");
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
              onChange={(e) => {
                setFaculty({
                  ...faculty,
                  id: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={faculty.name}
              onChange={(e) => {
                setFaculty({
                  ...faculty,
                  name: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>DOB</Form.Label>
            <Form.Control
              type="text"
              name="dob"
              value={faculty.dob}
              onChange={(e) => {
                setFaculty({
                  ...faculty,
                  dob: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={faculty.address}
              onChange={(e) => {
                setFaculty({
                  ...faculty,
                  address: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              name="gender"
              value={faculty.gender}
              onChange={(e) => {
                setFaculty({
                  ...faculty,
                  gender: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="text"
              name="contact"
              value={faculty.contact}
              onChange={(e) => {
                setFaculty({
                  ...faculty,
                  contact: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Course</Form.Label>
            {faculty.course.map((data, index) => (
              <Form.Control
                key={index}
                type="text"
                name="course"
                value={data}
                readOnly
              />
            ))}
          </Form.Group>
        </Form>
      </div>

      <div>
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
