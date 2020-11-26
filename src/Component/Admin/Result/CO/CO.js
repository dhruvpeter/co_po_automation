import React, { useState } from "react";
import { Table } from "react-bootstrap";

export default function CO() {
  const co = [
    {
      batchYear: "2016",
      c1: 1,
      c2: 2,
      c3: 1,
      c4: 2,
      c5: 1,
      c6: 2,
      coursename: "TOC"
    },
    {
        batchYear: "2017",
        c1: 1,
        c2: 2,
        c3: 1,
        c4: 2,
        c5: 1,
        c6: 2,
        coursename: "TOC"
      },
      {
        batchYear: "2018",
        c1: 1,
        c2: 2,
        c3: 1,
        c4: 2,
        c5: 1,
        c6: 2,
        coursename: "DC"
      },
      {
        batchYear: "2019",
        c1: 1,
        c2: 2,
        c3: 1,
        c4: 2,
        c5: 1,
        c6: 2,
        coursename: "DC"
      },
      {
        batchYear: "2020",
        c1: 1,
        c2: 2,
        c3: 1,
        c4: 2,
        c5: 1,
        c6: 2,
        coursename:"MP"
      },


  ];
  const semester = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];
  const course = [
      {
          coursename: "TOC",
          semester: "S5"
      },
      {
        coursename: "DC",
        semester: "S5"
      },
      {
        coursename: "MP",
        semester: "S1"
      }, 
    
  ];
  const [filterSem, setFilterSem] = useState("S1");
  const handleChangeFilterSem = (event) => {
    setFilterSem(event.target.value);
  };


  const [filterCourse, setFilterCourse] = useState("TOC");
  const handleChangeFilterCourse = (event) => {
    setFilterCourse(event.target.value);
  };
  
  filterCourse = course.filter(function (course) {
    return course.semester === filterSem;
  });

  const filteredCoWithSemAndCourse = co.filter(
    function (co) {
      return co.coursename === filterCourse.coursename;
    }
  );
  return (
    <div className="container-fluid">
      <div><h3>CO</h3></div>
      <div className="filter">
        <label>
          <select 
            value={filterSem} 
            onChange={handleChangeFilterSem}>
            {semester.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </label>
        <label>
          <select
            value={filterCourse}
            onChange={handleChangeFilterCourse}>
            {course.map((data, index) => (
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
