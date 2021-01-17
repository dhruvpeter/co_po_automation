import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function AssignFaculty() {
  const data = useLocation().state;
  const [faculty, setFaculty] = useState({
    id: data.faculty_id,
    name: data.faculty_name,
  });

  const [filterSem, setFilterSem] = useState(1);

  //   const faculty = {
  //     id: "1000",
  //     name: "Sumesh Divakaran",
  //     course: [],
  //   };

  const [course, setCourse] = useState([{
    code: "PH100",
    name: "Physics"
  }]);
  useEffect(() => {
    async function fetchCourse() {
      try {
        console.log(filterSem)
        const res = await axios.get(`http://localhost:5000/api/course?semester=${filterSem}`)
        // console.log(res.data.courses);
        const courseList = [];
        res.data.courses.forEach(course => courseList.push({code: course.course_code, name: course.course_name }))
        console.log(courseList)
        setCourse(courseList)
      } catch(err) {
        console.log(err);
      }
    }

    fetchCourse();
  }, [filterSem])

  const year = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  const [filterYear, setFilterYear] = useState(2018);
  const handleChangeFilterYear = (event) => {
    setFilterYear(event.target.value);
  };
  const semester = [1, 2, 3, 4, 5, 6, 7, 8];
  const handleChangeFilterSem = (event) => {
    setFilterSem(event.target.value);
  };

  const [selectedCourse, setSCourse] = useState();
  const handleChangeCourse =  (event) => {
    setSCourse(event.target.value);
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
  async function Submit(e) {
    e.preventDefault();
    // console.log("Submit Button clicked.");
    // console.log(selectedCourse);
    // console.log(filterSem);
    // console.log(filterYear);
    // console.log(faculty.id)
    // console.log(fil)
    try {
      const res = await axios.post(
        'http://localhost:5000/api/course/assignfaculty',
        {
          courseCode: selectedCourse,
          facultyId: faculty.id,
          courseYear: filterYear,
          passoutYear: 4 - (filterSem/2) + filterYear
        }
      )
      console.log(res);
    } catch(err) {
      console.log(err);
    }
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
          {/* <Form.Group>
            <Form.Label>Faculty Id</Form.Label>
            <Form.Control type="text" name="id" value={faculty.id} readOnly />
          </Form.Group> */}
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
              <option key={index} value={data.code}>
                {data.name}
              </option>
            ))}
          </select>
        </label>
        {/* <Button variant="dark" type="submit" onClick={selectCourse}>
          Assign
        </Button> */}
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
