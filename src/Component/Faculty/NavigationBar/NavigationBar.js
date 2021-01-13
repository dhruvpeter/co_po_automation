import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/faculty/profile">Faculty</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <NavDropdown title="Selected Course" id="collasible-nav-dropdown">
              <NavDropdown.Item href="">
                Selected Course
              </NavDropdown.Item>
            </NavDropdown> */}
            <NavDropdown title="Student" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/faculty/student/view-student">
                View Student
              </NavDropdown.Item>
              <NavDropdown.Item href="/faculty/student/add-mark">
                Add Mark
              </NavDropdown.Item>
              <NavDropdown.Item href="/faculty/student/assign-student">
                Assign Student
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/faculty/survey">Survey</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/faculty/profile">Profile</Nav.Link>
            <Nav.Link href="">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
