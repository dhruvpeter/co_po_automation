import React from "react";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import {useState } from "react";


export default function SelectedCourse() {


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
                    <input type="email" placeholder="Course code" name="Course Code" value={value.coursename} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control type="text" placeholder="Course name" name="Course name" value={value.coursecode} onChange={handleChange} />
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
                <td><Form.Control placeholder={data.p1} /></td>
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
                <td><Form.Control placeholder={data.p1} /></td>
                <td><Form.Control placeholder={data.p2} /></td>
                <td><Form.Control placeholder={data.p3} /></td>
                <td><Form.Control placeholder={data.p4} /></td>
                <td><Form.Control placeholder={data.p5} /></td>
                <td><Form.Control placeholder={data.p6} /></td>           
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
    </div>
  );



}
