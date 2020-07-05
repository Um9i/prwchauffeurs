import React from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SERVICE_ID: any = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID: any = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID: any = process.env.REACT_APP_USER_ID;

class ContactUs extends React.Component {
  sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  render() {
    return (
      <Form onSubmit={this.sendEmail}>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" />
        </Form.Group>
        <Button
          className="py-2 mt-4 disabled"
          block
          variant="success"
          type="submit"
          value="Send"
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactUs;
