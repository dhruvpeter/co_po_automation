import React,{ useState } from "react";
import { Form, Button } from "react-bootstrap";
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


  function Submit(e) {
    e.preventDefault();
    console.log('Submit Button clicked.');
    }

    function Delete(e) {
        e.preventDefault();
        console.log('Delete Button clicked.');
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
      <Button variant="primary" onClick={Delete}>Delete</Button>{' '}
      <Button variant="primary" onClick={Submit}>Save</Button>
      </div> 

      
    </div>          
              
  );
}
