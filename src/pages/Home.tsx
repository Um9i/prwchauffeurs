import React from "react";
import Container from "react-bootstrap/Container";
import Heading from "../components/Heading";
import Cards from "../components/Cards";
import ContactDetail from "../components/ContactDetail";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Heading />
        <Cards />
        <div className="my-5 py-5">
          <ContactDetail />
        </div>
      </Container>
    );
  }
}

export default Home;
