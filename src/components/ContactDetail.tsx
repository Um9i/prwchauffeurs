import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "./ContactDetail.scss";

class ContactDetail extends React.Component {
  render() {
    return (
      <Row className="contact-detail">
        <Col lg={{ span: 4, offset: 2 }}>
          <Card className="bg-dark">
            <Card.Header>Address</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark">
                19a George Street
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark">Glossop</ListGroup.Item>
              <ListGroup.Item className="bg-dark">SK13 8AY</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col lg={{ span: 4 }}>
          <Card className="bg-dark">
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark d-flex justify-content-between align-items-center">
                Tel:{" "}
                <a className="text-primary" href="tel:+441616826070">
                  0161 682 6070
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark d-flex justify-content-between align-items-center">
                Mobile :{" "}
                <a className="text-primary" href="tel:+447971675322">
                  0797 167 5322
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark d-flex justify-content-between align-items-center">
                Email:{" "}
                <a
                  className="text-primary"
                  href="mailto:prwchauffeurs@gmail.com"
                >
                  prwchauffeurs@gmail.com
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ContactDetail;
