import React, { useState } from "react";
import { Form } from "react-bootstrap";
export default function Home() {
  const faculty = {
    id: "TVE18",
    name: "Sreelal",
    course: ["Physics", "Chemistry"],
  };
  const [filterCourse, setFilterCourse] = useState(faculty.course[0]);
  const handleChangeFilterCourse = (event) => {
    setFilterCourse(event.target.value);
  };
  console.log(filterCourse);
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

      <div>
        <h5>Choose course:</h5>
        <label>
          <select value={filterCourse} onChange={handleChangeFilterCourse}>
            {faculty.course.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
