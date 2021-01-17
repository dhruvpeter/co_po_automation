import React,{ useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SelectedFaculty() {

  const [student, setStudent] = useState({
    name: "Akhil K P",
    regno: "TVE18CS000",
  });

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

  const [filterBatchYear, setFilterBatchYear] = useState("2022");
  const handleChangeFilterBatchYear = (event) => {
    setFilterBatchYear(event.target.value);
  };


     
    function Back(e) {
      e.preventDefault();
      console.log('Back Button clicked.');
    }     

  return (
    <div className="container-fluid">
      <div className="form">
        <Form>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={student.name}
              readOnly
              onChange={(e) => {
                setStudent({
                  ...student,
                  name: e.target.value,
                });
              }}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label>Register No.</Form.Label>
            <Form.Control
              type="text"
              name="regno"
              value={student.regno}
              readOnly
              onChange={(e) => {
                setStudent({
                  ...student,
                  regno: e.target.value,
                });
              }}
            />
            </Form.Group>
  
        </Form>
      </div>

      <div className="filter">
      <Form.Label>Admission Year</Form.Label>
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

      <div>  
      <Button variant="dark" onClick={Back}>
          <Link to="/admin/student/view-student">Back</Link>
        </Button>
      </div> 

      
    </div>          
              
  );
}
