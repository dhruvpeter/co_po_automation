import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import axios from 'axios'

export default function AssignStudent() {
  const [student, setStudent] = useState([]);
  const [faculty, setFaculty] = useState({
    id: "2",
    name: "Sreelal",
    course: ["Physics", "Chemistry"],
  });

  useEffect(() => { 
    async function fetchStudents(){
      try {
        const students = await axios.get('http://localhost:5000/api/student');
        // console.log(students.data.students);
        const studentList = [];
        students.data.students.forEach(student => studentList.push({regNo: student.university_reg_no, name: student.stud_name, admissionYear: student.passout_year}))
        console.log(studentList)
        setStudent(studentList);

        const courses = await axios.get(`http://localhost:5000/api/course?facultyId=${faculty.id}`)
        const courseNames = [];
        // console.log(courses.data.courses)
        courses.data.courses.forEach(course => courseNames.push(course.course_name));
        // console.log(courses.data.courses)
        // console.log(courseNames)
        setFaculty({ ...faculty, course: courseNames })
      } catch(err) {
        console.log(err);
      }
    }
    fetchStudents();
  },[]);

  const [selectedStudents, setSelectedStudents] = useState(() => {
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
    return student.admissionYear == filterAdmissionYear;
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
      setSelectedStudents(newList);
    },
    onSelectAll: (isSelect, rows, e) => {
      const newList = [...selectedStudents];
      for (let i = 0; i < newList.length; i++) newList[i] = isSelect;
      setSelectedStudents(newList);
    },
  };
  // const faculty = {
  //   id: "TVE18",
  //   name: "Sreelal",
  //   course: ["Physics", "Chemistry"],
  // };
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
          university_no: student[i].university_reg_no,
          passoutYear: student[i].passout_year,
        });
    setSelectedStudents(finalList);
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
              <option key={index} value={data.code}>
                {data.name}
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
        <Button type="submit" variant="dark" onClick={Submit}>
          Save
        </Button>
      </div>
    </div>
  );
}
