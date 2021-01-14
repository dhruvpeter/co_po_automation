import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CourseDetails.css";

export default function CourseDetails() {
  const [course, setCourse] = useState([]);
  const semester = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"];
  const batchYear = [
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];

  const [filterSem, setFilterSem] = useState("S1");
  const handleChangeFilterSem = (event) => {
    setFilterSem(event.target.value);
  };
  const [filterBatchYear, setFilterBatchYear] = useState("2022");
  const handleChangeFilterBatchYear = (event) => {
    setFilterBatchYear(event.target.value);
  };

  useEffect(() => { 
      async function fetchCourses(){
      try{
        const response = await axios.get("http://localhost:5000/api/course", {
          params:{
            semester: filterSem,
            batch: filterBatchYear + 4
          }
        });
        setCourse(response);
      }catch(err){
        console.log(err);
      }
    }
    fetchCourses();
  },[filterSem, filterBatchYear]);


  return (
    <div className="container-fluid">
      <div><h3>Course Details</h3></div>
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
          <select
            value={filterBatchYear}
            onChange={handleChangeFilterBatchYear}>
            {batchYear.map((data, index) => (
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {course.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.course_code}</td>
                <td>{data.course_name}</td>
                <td>
                  <Button variant="light">
                    <Link to="/admin/course/course-details/selected-course">
                      View
                    </Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
