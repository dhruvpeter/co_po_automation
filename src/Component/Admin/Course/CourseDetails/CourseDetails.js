import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./CourseDetails.css"
export default function CourseDetails() {
  const course = [
    {
      code: "PH100",
      name: "Engineering Physics",
      semester: "S1",
    },
    {
      code: "CS205",
      name: "Data Structures",
      semester: "S3",
    },
    {
      code: "CS301",
      name: "Theory of Computation",
      semester: "S5",
    },
  ];
  const semester = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];
  const [filterTag, setFilterTag] = useState("S1");
  const handleChangeFilterTag = (event) => {
    setFilterTag(event.target.value);
  };
  const filteredCourse = course.filter(function (result) {
    return result.semester === filterTag;
  });
  return (
    <div className="container-fluid">
        <div className="filter">
          <label>
            <select value={filterTag} onChange={handleChangeFilterTag}>
              {semester.map((data, index) => (
                <option key={index} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="table">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Course Code</th>
                <th>Course Name</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourse.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.code}</td>
                  <td>{data.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
    </div>
  );
}
