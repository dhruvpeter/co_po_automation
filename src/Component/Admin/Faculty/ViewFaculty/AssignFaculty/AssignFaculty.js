import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AssignFaculty() {
  const [faculty, setFaculty] = useState({
    id: "1000",
    name: "Sumesh Divakaran",
    course: [
      {
        name: "Engineering Physics",
        code: "AAA",
        semester: "S1",
        year: "2018",
      },
    ],
  });
  //   const faculty = {
  //     id: "1000",
  //     name: "Sumesh Divakaran",
  //     course: [],
  //   };

  const [course, setCourse] = useState([]);
  useEffect(() => {

  }, [])
  const year = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  const [filterYear, setFilterYear] = useState(2018);
  const handleChangeFilterYear = (event) => {
    setFilterYear(event.target.value);
  };
  const semester = [1, 2, 3, 4, 5, 6, 7, 8];
  const [filterSem, setFilterSem] = useState(1);
  const handleChangeFilterSem = (event) => {
    setFilterSem(event.target.value);
  };

  const [selectedCourse, setSCourse] = useState();
  const handleChangeCourse =  (event) => {
    setCourse(event.target.value);
  }

  const selectCourse = (event) => {
    event.preventDefault();
    const newItem = [];
    newItem.year = filterYear;

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
        <label>
          <select value={filterYear} onChange={handleChangeFilterYear}>
            {year.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </label>
          <select value={selectedCourse} onChange={handleChangeCourse}>
            <option key={"Select"} value="Select">
              Select Course
            </option>
            {course.map((data, index) => (
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
              <th>Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {faculty.course.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.semester}</td>
                <td>{data.name}</td>
                <td>{data.year}</td>
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
