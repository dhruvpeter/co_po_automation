import React,{ useState } from "react";
import { Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SelectedCourse() {
  const coPoMatrix = [
    {
      po1: "1",
      po2: "2",
      po3: "3",
      po4: "1",
      po5: "2",
      po6: "3",
      po7: "2",
      po8: "1",
      po9: "1",
      po10: "1",
      po11: "1",
      po12: "1",
    },
    {
      po1: "2",
      po2: "3",
      po3: "3",
      po4: "0",
      po5: "0",
      po6: "0",
      po7: "2",
      po8: "3",
      po9: "1",
      po10: "2",
      po11: "3",
      po12: "1",
    },
  ];

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
            {coPoMatrix.map((data, index) => (
              <tr key={index}>
                <td>CO{index + 1}</td>
                <td>
                <Form.Control />
                </td>
                <td>
                  <Form.Control  />
                </td>
                <td>
                  <Form.Control  />
                </td>
                <td>
                  <Form.Control  />
                </td>
                <td>
                  <Form.Control  />
                </td>
                <td>
                  <Form.Control  />
                </td>
                <td>
                  <Form.Control  />
                </td>
                <td>
                  <Form.Control />
                </td>
                <td>
                  <Form.Control  />
                </td>
                <td>
                  <Form.Control  />
                </td>
                <td>
                  <Form.Control  />
                </td>
                <td>
                  <Form.Control  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* <div className="table">
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
            {copsomatrix.map((data, index) => (
              <tr key={index}>
                <td>CO{index + 1}</td>
                <td>
                  <Form.Control placeholder={data.p1} />
                </td>
                <td>
                  <Form.Control placeholder={data.p2} />
                </td>
                <td>
                  <Form.Control placeholder={data.p3} />
                </td>
                <td>
                  <Form.Control placeholder={data.p4} />
                </td>
                <td>
                  <Form.Control placeholder={data.p5} />
                </td>
                <td>
                  <Form.Control placeholder={data.p6} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div> */}
    </div>
  );
}
