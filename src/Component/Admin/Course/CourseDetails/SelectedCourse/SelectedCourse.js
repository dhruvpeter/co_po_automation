import React from "react";
// import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function SelectedCourse() {
<<<<<<< HEAD


  const copomatrix = [
    {
        p1: "1",
        p2: "2",
        p3: "3",
        p4: "1",
        p5: "2",
        p6: "3",
        p7: "2",
        p8: "1",
        p9: "1",
        p10: "1",
        p11: "1",
        p12: "1"
        
    },
    {
        
        p1: "2",
        p2: "3",
        p3: "3",
        p4: "0",
        p5: "0",
        p6: "0",
        p7: "2",
        p8: "3",
        p9: "1",
        p10: "2",
        p11: "3",
        p12: "1"
      
      
      
      
    },

  ];

  const copsomatrix = [
    {
        p1: "1",
        p2: "2",
        p3: "3",
        p4: "1",
        p5: "2",
        p6: "3",
        
    },
    {
        
        p1: "2",
        p2: "3",
        p3: "3",
        p4: "0",
        p5: "0",
        p6: "0",
      
      
    },

  ];

    const [value, setvalue] = useState({
      coursename: "",
      coursecode: "",
      semester: "",
      faculty: "",
      p0: 1,
    });
   
    const handleChange = (event) => {
      setvalue(event.target.value);
    };
    

  return (
   
   <div className="container-fluid">
    
        <div className="form">
            <Form>
                <Form.Group>
                    <Form.Label>Course Code</Form.Label>
                    <Form.Control type="email" placeholder="Course code" name="Course Code" value={value.coursecode} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="text" placeholder="Course name" name="Course name" value={value.coursename} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Semester</Form.Label>
                    <Form.Control type="text" placeholder="Semester" name="Semester" value={value.semester} onChange={handleChange} />
                </Form.Group>                                
                <Form.Group>
                    <Form.Label>Faculty </Form.Label>
                    <Form.Control type="text" placeholder="Faculty Name" name="Faculty Name" value={value.faculty} onChange={handleChange} />
                </Form.Group>                


            </Form>
        </div>


        <div className="table">
=======
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
>>>>>>> f9da21cb3ce95253a215dcacd39642412d5565a2
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
<<<<<<< HEAD
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
                <td><Form.Control value={value.p0} onChange={handleChange} /></td>
                <td><Form.Control placeholder={data.p2} /></td>
                <td><Form.Control placeholder={data.p3} /></td>
                <td><Form.Control placeholder={data.p4} /></td>
                <td><Form.Control placeholder={data.p5} /></td>
                <td><Form.Control placeholder={data.p6} /></td>
                <td><Form.Control placeholder={data.p7} /></td>
                <td><Form.Control placeholder={data.p8} /></td>
                <td><Form.Control placeholder={data.p9} /></td>
                <td><Form.Control placeholder={data.p10} /></td>
                <td><Form.Control placeholder={data.p11} /></td>
                <td><Form.Control placeholder={data.p12} /></td>                
               
                </tr>
=======
              <th>#</th>
              {Array.from({ length: 12 }).map((_, index) => (
                <th key={index}>PO{index + 1}</th>
>>>>>>> f9da21cb3ce95253a215dcacd39642412d5565a2
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
