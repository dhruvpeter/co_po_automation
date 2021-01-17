import React, { useEffect, useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default function SelectedCourse() {
  const data = useLocation().state;
  
  useEffect(() => {
    function fetchCourseInfo(){
      axios.get('https://localhost:5000/api/course', {
        params:{
          semester: data.semester,
          batch: data.passout_year,
        }
      })
    }
  })
  const [CoPoMatrix, setCoPoMatrix] = useState([
    [1, 2, 3, 1, 2, 3, 2, 1, 1, 1, 1, 1],
    [2, 3, 3, 0, 0, 0, 2, 3, 1, 2, 3, 1],
  ]);


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

  const [course, setCourse] = useState({
    name: "Engineerting Physics",
    code: "PH100",
    semester: "S1",
    faculty: ["Faculty Name", "f2"],
  });

  const handlePOChange = (po, index, i) => {
    var resultMatrix = CoPoMatrix;
    resultMatrix[index][i] = Number(po);
    setCoPoMatrix(resultMatrix);
  };


  return (
    <div className="container-fluid">
      <div className="form">
        <Form>
          <Form.Group>
            <Form.Label>Course Code</Form.Label>
            <Form.Control
              type="text"
              name="code"
              value={course.code}
              onChange={(e) => {
                setCourse({
                  ...course,
                  code: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={course.name}
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
              value={course.semester}
              onChange={(e) => {
                setCourse({
                  ...course,
                  semester: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Faculty </Form.Label>
            {course.faculty.map((data, index) => (
              <Form.Control
                key={index}
                type="text"
                name="faculty"
                value={data}
                readOnly
              />
            ))}
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

      <div>
        <Button variant="dark" onClick={Back}>
          <Link to="/admin/course/course-details">Back</Link>
        </Button>{" "} 
        <Button variant="dark" onClick={Delete}>
          Delete
        </Button>{" "}
        <Button variant="dark" onClick={Submit}>
          Save
        </Button>
      </div>
    </div>
  );
}
