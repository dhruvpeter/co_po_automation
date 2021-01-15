import React, { useState } from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

export default function AssignStudent() {
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
  const [selectedStudents, setStudent] = useState(() => {
    const boolList = [];
    for (let i = 0; i < student.length; i++) boolList.push(false);
    return boolList;
  });
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
    onSelect: (row, isSelect, rowIndex, e) => {
      const newList = [...selectedStudents];
      newList[rowIndex] = isSelect;
      setStudent(newList);
    },
    onSelectAll: (isSelect, rows, e) => {
      const newList = [...selectedStudents];
      for (let i = 0; i < newList.length; i++) newList[i] = isSelect;
      setStudent(newList);
    },
  };
  const faculty = {
    id: "TVE18",
    name: "Sreelal",
    course: ["Physics", "Chemistry"],
  };
  const [filterCourse, setFilterCourse] = useState(faculty.course[0]);
  const handleChangeFilterCourse = (event) => {
    setFilterCourse(event.target.value);
  };
  function Submit(e) {
    // Observe hooks for correct changes
    let selectList = selectedStudents;
    const finalList = [];
    for (let i = 0; i < selectList.length; i++)
      if (selectList[i])
        finalList.push({
          university_no: student[i].regNo,
          passoutYear: student[i].admissionYear,
        });
    setStudent(finalList);
    console.log(selectedStudents);
  }

  return (
    <div className="container-fluid">
      <div>
        <h3>Assign Students</h3>
      </div>
      <div>
        <h5>Choose course:</h5>
        <label>
          <select value={filterCourse} onChange={handleChangeFilterCourse}>
            {faculty.course.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
        </label>
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
          data={filteredStudentWithAdmissionYear}
          columns={columns}
          selectRow={selectRow}
        />
      </div>
      <div>
        <Button variant="dark" onClick={Submit}>
          Save
        </Button>
      </div>
    </div>
  );
}
