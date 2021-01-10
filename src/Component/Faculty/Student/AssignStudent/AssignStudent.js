import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ViewStudent() {
  const student = [
    {
      regNo: "TVE18CS017",
      name: "Dhanesh P S",
      admissionYear: "2018",
    },
    {
      regNo: "TVE18CS018",
      name: "Dhruv Eldho Peter",
      admissionYear: "2018",
    },
    {
      regNo: "TVE18CS031",
      name: "Lukose Jacob",
      admissionYear: "2018",
    },
    {
      regNo: "TVE18CS058",
      name: "Sheen Xavier A",
      admissionYear: "2018",
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
        <h3>Student Details</h3>
      </div>
      <div className="filter">
        <label>
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
      <div className="table">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Reg.No</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredStudentWithAdmissionYear.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.regNo}</td>
                <td>{data.name}</td>
                <td>
                  {/* <Button variant="light">
                    <Link to="/admin/student/view-student/edit-student">
                      View
                    </Link>
                  </Button> */}
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" />
                  </Form.Group>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
