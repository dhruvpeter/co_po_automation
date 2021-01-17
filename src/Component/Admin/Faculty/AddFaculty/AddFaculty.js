import React,{ useState } from "react";
import { Form, Button, Dropdown, DropdownButton, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default function SelectedFaculty() {

  const [faculty, setFaculty] = useState({});
  const [admin, setAdmin] = useState('Is an Administrator ?');
  const [show, setShow] = useState(true);

  function Submit(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/api/faculty", faculty )
    .then(res => setShow(true))
    .then(err => console.log(err));

    }
  
  return (
    <div className="container-fluid">
      <div><h3>Add Faculty</h3></div>
      <div className="form">
        <Form>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={(e) => {
                setFaculty({
                  ...faculty,
                  name: e.target.value,
                });
              }}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={(e) => {
                setFaculty({
                  ...faculty,
                  email: e.target.value,
                });
              }}
            />
            </Form.Group>
            <Form.Group>
            <Form.Label>Department ID</Form.Label>
            <Form.Control
              type="text"
              name="deptid"
              onChange={(e) => {
                setFaculty({
                  ...faculty,
                  dept: Number(e.target.value),
                });
              }}
            />
            </Form.Group>
            <Form.Group>
            <DropdownButton id="dropdown-basic-button" variant="secondary" title={admin}>
              <Dropdown.Item onClick={() => {setFaculty({...faculty, admin: 1}); setAdmin("Administrator")}}>Yes</Dropdown.Item>
              <Dropdown.Item onClick={() => {setFaculty({...faculty, admin: 0}); setAdmin("Non-Administrator")}}>No</Dropdown.Item>
            </DropdownButton>
            </Form.Group>
            <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={(e) => {
                setFaculty({
                  ...faculty,
                  password: e.target.value,
                });
              }}
            />
            </Form.Group>
        </Form>
      </div>
      <div>       
      <Button variant="primary" onClick={Submit}>Save</Button>
      </div> 
      <div>
      <Alert show={show} variant="success">
        <p>
          Faculty Successfully Added !
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Dismiss
          </Button>
        </div>
      </Alert>
      </div>
    </div>          
              
  );
}

