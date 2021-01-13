import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AssignFaculty() {
  const [faculty, setFaculty] = useState({
    id: "1000",
    name: "Sumesh Divakaran",
    course: [],
  });
  //   const faculty = {
  //     id: "1000",
  //     name: "Sumesh Divakaran",
  //     course: [],
  //   };

  const course = [
    {
      name: "Engineering Physics",
      semester: "S1",
    },
    {
      name: "Data Structures",
      semester: "S3",
    },
    {
      name: "Theory of Computation",
      semester: "S5",
    },
  ];
  const semester = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];
  const [filterSem, setFilterSem] = useState("S1");
  const handleChangeFilterSem = (event) => {
    setFilterSem(event.target.value);
  };

  const [filterCourse, setFilterCourse] = useState("----");

  const handleChangeFilterCourse = (event) => {
    setFilterCourse(event.target.value);
  };
  const filteredCourseWithSem = course.filter(function (course) {
    return course.semester === filterSem;
  });
  const selectCourse = (event) => {
    event.preventDefault();
    const newItem = filteredCourseWithSem[0];

    let allItems = faculty.course;
    allItems.push(newItem);

    setFaculty({ ...faculty, course: allItems });
  };

  const deleteItem = (key) => {
    const courseAfterDelete = faculty.course.filter(
      (data, index) => index !== key
    );

    setFaculty({ ...faculty, course: courseAfterDelete });
  };
  function Submit(e) {
    e.preventDefault();
    console.log("Submit Button clicked.");
  }

  function Back(e) {
    e.preventDefault();
    console.log("Back Button clicked.");
  }
  return (
    <div className="container-fluid">
      <div>
        <h3>Assign Faculty</h3>
      </div>
      <div className="form">
        <Form>
          <Form.Group>
            <Form.Label>Faculty Id</Form.Label>
            <Form.Control type="text" name="id" value={faculty.id} readOnly />
          </Form.Group>
          <Form.Group>
            <Form.Label>Faculty name</Form.Label>
            <Form.Control type="text" name="id" value={faculty.name} readOnly />
          </Form.Group>
        </Form>
      </div>
      <div className="filter">
        <label>
          <select value={filterSem} onChange={handleChangeFilterSem}>
            {semester.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </label>
        <label>
          <select value={filterCourse} onChange={handleChangeFilterCourse}>
            <option key={"Select"} value="Select">
              Select Course
            </option>
            {filteredCourseWithSem.map((data, index) => (
              <option key={index} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
        </label>
        <Button variant="dark" type="submit" onClick={selectCourse}>
          Select
        </Button>
      </div>
      <div className="table">
        <Form.Label>Selected Courses</Form.Label>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Semester</th>
              <th>Course Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {faculty.course.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.semester}</td>
                <td>{data.name}</td>
                <td>
                  <Button variant="light" onClick={() => deleteItem(index)}>
                    {/* <Link to="/admin/course/course-details/selected-course">
                      View
                    </Link> */}
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <Button variant="dark" onClick={Back}>
          <Link to="/admin/faculty/view-faculty">Back</Link>
        </Button>{" "}
        <Button variant="dark" onClick={Submit}>
          Save
        </Button>
      </div>
    </div>
  );
}
