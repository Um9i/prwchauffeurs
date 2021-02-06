import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from ".././components/ContactForm";
import ContactDetail from ".././components/ContactDetail";
import Jumbotron from "react-bootstrap/Jumbotron";

class Contact extends React.Component {
  render() {
    return (
      <Container className="my-5">
        <Jumbotron className="bg-dark my-5 p-5">
          <Row>
            <Col lg={{ span: 4, offset: 4 }}>
              <h1 className="mb-5">Contact Us</h1>
              <ContactForm success={false} />
            </Col>
          </Row>
        </Jumbotron>
        <div className="my-5 py-5">
          <ContactDetail />
        </div>
      </Container>
    );
  }
}

export default Contact;
