import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/faculty">Faculty</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/faculty">Home</Nav.Link>
            {/* <NavDropdown title="Selected Course" id="collasible-nav-dropdown">
              <NavDropdown.Item href="">
                Selected Course
              </NavDropdown.Item>
            </NavDropdown> */}
            <NavDropdown title="Student" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/faculty/student/view-student">
                View Student Marks
              </NavDropdown.Item>
              <NavDropdown.Item href="/faculty/student/add-mark">
                Add Mark
              </NavDropdown.Item>
              <NavDropdown.Item href="/faculty/student/assign-student">
                Assign Student
              </NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Survey" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/faculty/survey/surveyPO">
                PO Survey 
              </NavDropdown.Item>
              <NavDropdown.Item href="/faculty/survey/surveyPSO">
                PSO Survey 
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="/faculty/profile">Profile</Nav.Link> */}
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
