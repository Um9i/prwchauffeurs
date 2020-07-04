import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Heading.scss";

class Heading extends React.Component {
  render() {
    return (
      <Carousel className="my-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/merc.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>TRANSPORT FOR TV & FILM</h3>
            <p>Professional Reliable Chauffeuring.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/merc.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Arrive in Style</h3>
            <p>Luxury service from start to finish.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/merc.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Heading;
