import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AddCourse() {
  const [CoPoMatrix, setCoPoMatrix] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [CoPsoMatrix, setCoPsoMatrix] = useState([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0], 
  ]);

  const [course, setCourse] = useState({});

  const handlePOChange = (po, index, i) => {
    var resultMatrix = CoPoMatrix;
    resultMatrix[index][i] = Number(po);
    setCoPoMatrix(resultMatrix);
  };

  const handlePSOChange = (pso, index, i) => {
    var resultMatrixPSO = CoPsoMatrix;
    resultMatrixPSO[index][i] = Number(pso);
    setCoPsoMatrix(resultMatrixPSO);
  };

  function Submit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/api/course', {
      courseCode: course.code, 
      courseName: course.name, 
      numberOfCos: 6,
      deptId: course.deptId,
      semester: course.semester,
      co1: [CoPoMatrix[0], CoPsoMatrix[0]],
      co2: [CoPoMatrix[1], CoPsoMatrix[1]],
      co3: [CoPoMatrix[2], CoPsoMatrix[2]],
      co4: [CoPoMatrix[3], CoPsoMatrix[3]],
      co5: [CoPoMatrix[4], CoPsoMatrix[4]],
      co6: [CoPoMatrix[5], CoPsoMatrix[5]]
      }).then(response => {
        setCourse(response.data.courses)
      }).then(err => {
      console.log(err);
  });
}

  return (
    <div className="container-fluid">
      <div><h3>Add Course</h3></div>
      <div className="form">
        <Form>
          <Form.Group>
            <Form.Label>Course Code</Form.Label>
            <Form.Control
              type="text"
              name="code"
              placeholder="PH100"
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
              placeholder="Engineering Physics"
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
              placeholder="1"
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
              placeholder="1"
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
                      placeholder={po}
                      onChange={(e) => handlePOChange(e.target.value, index, i)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: 6 }).map((_, index) => (
                <th key={index}>PSO{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CoPsoMatrix.map((data, index) => (
              <tr key={index}>
                <td>CO{index + 1}</td>
                {data.map((pso, i) => (
                  <td key={i}>
                    <Form.Control
                      type="text"
                      name="PSO"
                      placeholder={pso}
                      onChange={(e) =>
                        handlePSOChange(e.target.value, index, i)
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div>
        <Button variant="dark" onClick={Submit}>
          <Link to="/admin">
            Save
          </Link>
        </Button>
      </div>
    </div>
  );
}
