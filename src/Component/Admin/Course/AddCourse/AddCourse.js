import React, { useState } from "react";
import { Table, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function AddCourse() {
  const [CoPoMatrix, setCoPoMatrix] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [course, setCourse] = useState({ deptId: 1 });
  const [show, setShow] = useState(false);

  const handlePOChange = (po, index, i) => {
    var resultMatrix = CoPoMatrix;
    resultMatrix[index][i] = Number(po);
    setCoPoMatrix(resultMatrix);
  };

  function Submit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/course", {
        courseCode: course.code,
        courseName: course.name,
        numberOfCos: 6,
        deptId: course.deptId,
        semester: course.semester,
        co1: CoPoMatrix[0],
        co2: CoPoMatrix[1],
        co3: CoPoMatrix[2],
        co4: CoPoMatrix[3],
        co5: CoPoMatrix[4],
        co6: CoPoMatrix[5],
      })
      .then((res) => {
        console.log(res);
        setShow(true);
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container-fluid">
      <div>
        <h3>Add Course</h3>
      </div>
      <div className="form">
        <Form>
          <Form.Group>
            <Form.Label>Course Code</Form.Label>
            <Form.Control
              type="text"
              name="code"
              onChange={(e) => {
                setCourse({
                  ...course,
                  code: e.target.value,
                });
              }}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              onChange={(e) => {
                setCourse({
                  ...course,
                  name: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Semester</Form.Label>
            <Form.Control
              type="text"
              name="semester"
              required
              onChange={(e) => {
                setCourse({
                  ...course,
                  semester: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Department ID</Form.Label>
            <Form.Control
              type="text"
              name="departmentid"
              required
              onChange={(e) => {
                setCourse({
                  ...course,
                  deptId: e.target.value,
                });
              }}
            />
          </Form.Group>
        </Form>
      </div>

      <div className="table">
        <Form.Label>Correlation Matrix</Form.Label>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: 12 }).map((_, index) => (
                <th key={index}>PO{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CoPoMatrix.map((data, index) => (
              <tr key={index}>
                <td>CO{index + 1}</td>
                {data.map((po, i) => (
                  <td key={i}>
                    <Form.Control
                      type="text"
                      name="PO"
                      required
                      onChange={(e) => handlePOChange(e.target.value, index, i)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <Button type="submit" variant="dark" onClick={Submit}>
          Save
        </Button>
      </div>
      <div>
        <Alert show={show} variant="success">
          <p>Course Successfully Added !</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Dismiss
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
}
