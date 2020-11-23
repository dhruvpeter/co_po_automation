import React from "react";
// import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function SelectedCourse() {
  //   const coPoMatrix = [
  //     {
  //       po1: "1",
  //       po2: "2",
  //       po3: "3",
  //       po4: "1",
  //       po5: "2",
  //       po6: "3",
  //       po7: "2",
  //       po8: "1",
  //       po9: "1",
  //       po10: "1",
  //       po11: "1",
  //       po12: "1",
  //     },
  //     {
  //       po1: "2",
  //       po2: "3",
  //       po3: "3",
  //       po4: "0",
  //       po5: "0",
  //       po6: "0",
  //       po7: "2",
  //       po8: "3",
  //       po9: "1",
  //       po10: "2",
  //       po11: "3",
  //       po12: "1",
  //     },
  //   ];

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
    name: "",
    code: "",
    semester: "",
    faculty: "",
  });

  return (
    <div className="container-fluid">
      <div className="form">
        <Form>
          {/* <Form.Group>
            <Form.Label>Course Code</Form.Label>
            <Form.Control
              type="text"
              name="Course Code"
              value={course.code}
              onChange={handleChange}
            />
          </Form.Group> */}
          <Form.Group>
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              name="Course name"
              value={course.name}
              onChange={e => {
                setCourse({
                ...course,
                name: e.target.value,
              })
              console.log(course)}}
            />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Semester</Form.Label>
            <Form.Control
              type="text"
              name="Semester"
              value={course.semester}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Faculty </Form.Label>
            <Form.Control
              type="text"
              name="Faculty Name"
              value={course.faculty}
              onChange={handleChange}
            />
          </Form.Group> */}
        </Form>
      </div>

      {/* <div className="table">
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
            {copomatrix.map((data, index) => (
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
                <td>
                  <Form.Control placeholder={data.p7} />
                </td>
                <td>
                  <Form.Control placeholder={data.p8} />
                </td>
                <td>
                  <Form.Control placeholder={data.p9} />
                </td>
                <td>
                  <Form.Control placeholder={data.p10} />
                </td>
                <td>
                  <Form.Control placeholder={data.p11} />
                </td>
                <td>
                  <Form.Control placeholder={data.p12} />
                </td>
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
