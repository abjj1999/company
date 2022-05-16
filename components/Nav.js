import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
function Navv() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">CBRE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Link href="/">
                <a className="nav-link  logo">Home</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/about">
                <a className="nav-link  logo">About us</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/about">
                <a className="nav-link  logo">projects</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/services/service1">
                  Service1
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/service2">
                  service 2
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/service3">
                  service 3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <Link href="/contact">
                <a className="nav-link  logo">Contact Us</a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;
