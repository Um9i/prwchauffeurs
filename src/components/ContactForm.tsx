import React from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const SERVICE_ID: any = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID: any = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID: any = process.env.REACT_APP_USER_ID;

interface Success {
  success: boolean;
}

class ContactUs extends React.Component<{ success: boolean }, Success> {

  constructor(props: any) {
    super(props);
    this.state = {
      success: this.props.success,
    };
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        this.setState({success: true});
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  render() {
    const success = this.state.success;
    let message;
    if (success) {
      message = <Alert variant="success text-center">Message sent successfully!</Alert>;
    }
    return (
      <Form onSubmit={this.sendEmail}>
        {message}
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
          className="py-2 mt-4 mb-4"
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
