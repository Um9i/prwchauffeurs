import React from "react";
import Container from "react-bootstrap/Container";
import Heading from "../components/Heading";
import Cards from "../components/Cards";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Heading />
        <Cards />
      </Container>
    );
  }
}

export default Home;
