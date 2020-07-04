import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar className="py-3 navbar-dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/prwchauffeurs/">PRW Chauffeurs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/prwchauffeurs/">Home</Nav.Link>
              <Nav.Link href="/prwchauffeurs/about/">About</Nav.Link>
              <Nav.Link href="/prwchauffeurs/contact/">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
