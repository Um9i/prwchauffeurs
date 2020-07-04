import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import "./Navigation.scss";

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Navbar className="py-3 navbar-dark" bg="primary" expand="lg">
          <Container>
            <Link className="navbar-brand" to="/prwchauffeurs/">
              PRW Chauffeurs
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/prwchauffeurs/about/">
                  About
                </Link>
                <Link className="nav-link" to="/prwchauffeurs/contact/">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/prwchauffeurs/about/">
            <About />
          </Route>
          <Route path="/prwchauffeurs/contact/">
            <Contact />
          </Route>
          <Route exact path="/prwchauffeurs/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
