import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from ".././components/ContactForm";
import Jumbotron from "react-bootstrap/Jumbotron";

class Contact extends React.Component {
  render() {
    return (
      <Container className="my-5">
        <Jumbotron className="bg-dark my-5 p-5">
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <h1 className="mb-5">Contact Us</h1>
              <ContactForm />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default Contact;
