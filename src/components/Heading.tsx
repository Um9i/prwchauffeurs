import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Heading.scss";

class Heading extends React.Component {
  render() {
    return (
      <div className="Heading">
        <Jumbotron className="bg-dark my-5">
          <div className="my-5">
            <h1 className="text-center">Comfort with PRW Chauffeurs Ltd</h1>
            <div className="text-muted text-center">
              We pride ourselves in offering you the best available experience
              in one of our luxury chauffeur driven cars, by fully qualified,
              CRB checked Drivers.
            </div>
          </div>
          <img className="img-fluid" src="img/1074135.jpg" alt="banner"></img>
        </Jumbotron>
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
              <h3>Quality. Luxury. Relaxing.</h3>
              <p>We believe in travelling not just in style but comfort!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Heading;
