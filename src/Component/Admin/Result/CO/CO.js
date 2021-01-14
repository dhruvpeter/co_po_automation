import React, { useState } from "react";
import { Table } from "react-bootstrap";
export default function CO() {
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
  const co = [
    {
      admissionYear: "2015",
      co1: "1",
      co2: "2",
      co3: "3",
      co4: "2",
      co5: "1",
      co6: "2",
      courseName: "Engineering Physics",
    },
    {
      admissionYear: "2016",
      co1: "1",
      co2: "2",
      co3: "1",
      co4: "2",
      co5: "1",
      co6: "2",
      courseName: "Engineering Physics",
    },
    {
      admissionYear: "2015",
      co1: "1",
      co2: "2",
      co3: "1",
      co4: "2",
      co5: "1",
      co6: "3",
      courseName: "Data Structures",
    },
    {
      admissionYear: "2016",
      co1: "1",
      co2: "2",
      co3: "1",
      co4: "2",
      co5: "1",
      co6: "2",
      courseName: "Data Structures",
    },
    {
      admissionYear: "2015",
      co1: "1",
      co2: "2",
      co3: "1",
      co4: "2",
      co5: "1",
      co6: "2",
      courseName: "Theory of Computation",
    },
    {
      admissionYear: "2016",
      co1: "1",
      co2: "2",
      co3: "1",
      co4: "2",
      co5: "1",
      co6: "2",
      courseName: "Theory of Computation",
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
  const filteredCoWithSemAndCourse = co.filter(function (co) {
    return co.courseName === filterCourse;
  });
  console.log({filteredCourseWithSem});
  return (
    <div className="container-fluid">
      <div>
        <h3>CO Attainment</h3>
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
          <select value={filterCourse} onChange={handleChangeFilterCourse} >
            <option key={"Select"} value="Select">Select Course</option>
            {filteredCourseWithSem.map((data, index) => (
              <option key={index} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Batch Year</th>

            {Array.from({ length: 6 }).map((_, index) => (
              <th key={index}>CO{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredCoWithSemAndCourse.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.admissionYear}</td>
              <td>{data.co1}</td>
              <td>{data.co2}</td>
              <td>{data.co3}</td>
              <td>{data.co4}</td>
              <td>{data.co5}</td>
              <td>{data.co6}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}