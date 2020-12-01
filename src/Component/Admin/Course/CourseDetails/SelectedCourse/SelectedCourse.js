import React,{ useState } from "react";
import { Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SelectedCourse() {
  const [CoPoMatrix, setCoPoMatrix] = useState([
      [1, 2, 3, 1, 2, 3, 2, 1, 1, 1, 1, 1],
      [2, 3, 3, 0, 0, 0, 2, 3, 1, 2, 3, 1],
  ]);

  //   const coPsoMatrix = [
  //     {
  //       pso1: "1",
  //       pso2: "2",
  //       pso3: "3",
  //     },
  //     {
  //       pso1: "2",
  //       pso2: "3",
  //       pso3: "3",
  //     },
  //   ];

  const [course, setCourse] = useState({
    name: "Engineerting Physics",
    code: "PH100",
    semester: "S1",
    faculty: ["Faculty Name", "f2"],
    p1c1: "1",
  });

  const handlePOChange = (po, index, i) => {
    var resultMatrix = CoPoMatrix;
    resultMatrix[index][i] = Number(po);
    setCoPoMatrix(resultMatrix);
  }

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
                    <Form.Control type="text" name="PO" placeholder={po} onChange={(e)  => handlePOChange(e.target.value, index, i)}/>
                  </td> 
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
