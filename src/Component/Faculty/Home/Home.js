import React from "react";
import { Form } from "react-bootstrap";
export default function Home() {
  const faculty = {
    id: "1007",
    name: "Sreelal",
    course: ["C Programming", "Operating System"],
  };
  return (
    <div className="container-fluid">
      <Form>
        <Form.Group>
          <Form.Label>Faculty Id</Form.Label>
          <Form.Control type="text" name="id" value={faculty.id} readOnly />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={faculty.name} readOnly />
        </Form.Group>
        <Form.Group>
          <Form.Label>Course </Form.Label>
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
  );
}
