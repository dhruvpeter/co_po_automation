import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/admin">Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/admin">Home</Nav.Link>
            <NavDropdown title="Course" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/admin/course/course-details">
                Course Details
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/course/add-course">
                Add Course
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Faculty" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/admin/faculty/view-faculty">
                View Faculty
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/faculty/add-faculty">
                Add Faculty
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Student" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/admin/student/view-student">
                View Student
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/student/add-student">
                Add Student
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Result" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/admin/result/co">CO</NavDropdown.Item>
              <NavDropdown.Item href="/admin/result/po">PO</NavDropdown.Item>
              <NavDropdown.Item href="/admin/result/pso">PSO</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Survey" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/admin/survey/survey-facultyPO">
                PO Survey Faculty 
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/survey/survey-facultyPSO">
                PSO Survey Faculty 
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/survey/survey-employerPO">
                PO Survey Employer 
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/survey/survey-employerPSO">
                PSO Survey Employer 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link href="/admin/profile">Profile</Nav.Link> */}
            <Nav.Link href="">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
