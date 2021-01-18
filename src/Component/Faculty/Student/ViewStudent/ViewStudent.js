import React, { useState } from "react";
import { Table } from "react-bootstrap";
export default function ViewStudent() {
  const [faculty, setFaculty] = useState({
    id: "1007",
    name: "Sreelal",
    course: [
      { code: "CS100", name: "C Programming" },
      { code: "CS205", name: "Operating System" },
    ],
  });
  const [filterCourse, setFilterCourse] = useState(faculty.course[0].code);
  const handleChangeFilterCourse = (event) => {
    setFilterCourse(event.target.value);
    console.log(event.target.value);
  };
  const student = [
    {
      regNo: "TVE18CS017",
      name: "Dhanesh P S",
      admissionYear: "2018",
      internal1: "20",
      internal2: "20",
      assignment1: "10",
      assignment2: "10",
      endSem: "100",
    },
    {
      regNo: "TVE18CS018",
      name: "Dhruv Eldho Peter",
      admissionYear: "2018",
      internal1: "20",
      internal2: "20",
      assignment1: "10",
      assignment2: "10",
      endSem: "100",
    },
    {
      regNo: "TVE18CS031",
      name: "Lukose Jacob",
      admissionYear: "2018",
      internal1: "20",
      internal2: "20",
      assignment1: "10",
      assignment2: "10",
      endSem: "100",
    },
    {
      regNo: "TVE18CS058",
      name: "Sheen Xavier A",
      admissionYear: "2018",
      internal1: "20",
      internal2: "20",
      assignment1: "10",
      assignment2: "10",
      endSem: "100",
    },
  ];
  const admissionYear = [
    "2015",
    "2016",
    "2017",
    "2018",
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
  const [filterAdmissionYear, setFilterAdmissionYear] = useState("2018");
  const handleChangeFilterAdmissionYear = (event) => {
    setFilterAdmissionYear(event.target.value);
  };
  const filteredStudentWithAdmissionYear = student.filter(function (student) {
    return student.admissionYear === filterAdmissionYear;
  });
  return (
    <div className="container-fluid">
      <div>
        <h3>Student Marks</h3>
      </div>
      <div>
        <h5>Choose course:</h5>
        <label>
          <select value={filterCourse} onChange={handleChangeFilterCourse}>
            {faculty.course.map((data, index) => (
              <option key={index} value={data.code}>
                {data.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="filter">
        <label>
          <span>Batch Year:   </span>
          <select
            value={filterAdmissionYear}
            onChange={handleChangeFilterAdmissionYear}
          >
            {admissionYear.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Reg.No</th>
            <th>Name</th>
            <th>Internal 1</th>
            <th>Internal 2</th>
            <th>Assignment 1</th>
            <th>Assignment 2</th>
            <th>End Sem</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudentWithAdmissionYear.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.regNo}</td>
              <td>{data.name}</td>
              <td>{data.internal1}</td>
              <td>{data.internal2}</td>
              <td>{data.assignment1}</td>
              <td>{data.assignment2}</td>
              <td>{data.endSem}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
