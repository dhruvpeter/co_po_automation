import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Course" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Course Details</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Add Course
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Faculty" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">View Faculty</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Add Faculty
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Student" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">View Student</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Add Student
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Result" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">CO</NavDropdown.Item>
              <NavDropdown.Item href="#">
                PO
              </NavDropdown.Item>
              <NavDropdown.Item href="#">PSO</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#">Logout</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
