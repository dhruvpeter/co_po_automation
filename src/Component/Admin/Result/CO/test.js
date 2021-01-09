import React, { useState } from "react";
import { Table } from "react-bootstrap";

export default function CO() {
  const co = [
    {
      batchYear: "2016",
      co1: "1",
      co2: "2",
      co3: "1",
      co4: "2",
      co5: "1",
      co6: "2",
      coursename: "TOC",
    },
    {
      batchYear: "2017",
      co1: "1",
      co2: "2",
      co3: "1",
      co4: "2",
      co5: "1",
      co6: "2",
      coursename: "TOC",
    },
    {
      batchYear: "2018",
      co1: "1",
      co2: "2",
      co3: "1",
      co4: "2",
      co5: "1",
      co6: "2",
      coursename: "DC",
    },
    {
      batchYear: "2019",
      co1: "1",
      co2: "2",
      co3: "1",
      co4: "2",
      co5: "1",
      co6: "2",
      coursename: "DC",
    },
    {
      batchYear: "2019",
      co1: "1",
      co2: "2",
      co3: "1",
      co4: "2",
      co5: "1",
      co6: "2",
      coursename: "CHEM",
    },
    {
      batchYear: "2020",
      co1: "1",
      co2: "2",
      co3: "1",
      co4: "2",
      co5: "1",
      co6: "2",
      coursename: "CHEM",
    },
  ];
  const semester = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];
  const course = [
    {
      coursename: "TOC",
      semester: "S5",
    },
    {
      coursename: "DC",
      semester: "S5",
    },
    {
      coursename: "CHEM",
      semester: "S1",
    },
  ];
  const [filterSem, setFilterSem] = useState("S1");
  const handleChangeFilterSem = (event) => {
    setFilterSem(event.target.value);
  };

  const [filterCourse, setFilterCourse] = useState("--");
  const handleChangeFilterCourse = (event) => {
    setFilterCourse(event.target.value);
  };

  const filteredCourseWithSem = course.filter(function (course) {
    return course.semester === filterSem;
  });

  const filteredCoWithSemAndCourse = co.filter(function (co) {
    return co.coursename === filterCourse;
  });
  return (
    <div className="container-fluid">
      <div>
        <h3>CO</h3>
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
            {filteredCourseWithSem.map((data, index) => (
              <option key={index} value={data.coursename}>
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
              <th>Year</th>
              <th>CO1</th>
              <th>CO2</th>
              <th>CO3</th>
              <th>CO4</th>
              <th>CO5</th>
              <th>CO6</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredCoWithSemAndCourse.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.batchYear}</td>
                <td>{data.c1}</td>
                <td>{data.c2}</td>
                <td>{data.c3}</td>
                <td>{data.c4}</td>
                <td>{data.c5}</td>
                <td>{data.c6}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
