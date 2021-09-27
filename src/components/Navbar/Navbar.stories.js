import React from "react";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BsFillBootstrapFill } from "react-icons/bs";
export default {
  title: "Components/Navbar",
  component: Navbar,
};

export const Example = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export const Brand = () => (
  <>
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <BsFillBootstrapFill className="d-inline-block align-center me-2" />
          Brand Name
        </Navbar.Brand>
      </Container>
    </Navbar>
    <br />
    <Navbar bg="light">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <BsFillBootstrapFill className="d-inline-block align-top me-2" />
          Brand Name
        </Navbar.Brand>
      </Container>
    </Navbar>
    <br />
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <BsFillBootstrapFill className="d-inline-block align-top me-2" />
        </Navbar.Brand>
      </Container>
    </Navbar>
    <br />
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <BsFillBootstrapFill className="d-inline-block align-top me-2" />
          Brand Name
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
);
