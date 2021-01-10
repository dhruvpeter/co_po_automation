import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";

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

  const columns = [
    {
      dataField: "regNo",
      text: "Reg.No",
    },
    {
      dataField: "name",
      text: "Name",
    },
  ];

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
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
        <BootstrapTable
          keyField="regNo"
          data={student}
          columns={columns}
          selectRow={selectRow}
        />
      </div>
      <div>
        <Button variant="dark" onClick={Back}>
          <Link to="/">Back</Link>
        </Button>{" "}
        <Button variant="dark" onClick={Submit}>
          Save
        </Button>
      </div>
    </div>
  );
}
