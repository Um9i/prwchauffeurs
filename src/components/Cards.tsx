import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Cards.scss";

class Cards extends React.Component {
  render() {
    return (
      <Row>
        <Col lg className="my-4">
          <Card className="bg-dark">
            <Card.Img variant="top" src="img/1074598.jpg" />
            <Card.Body>
              <Card.Title>Quality. Luxury. Relaxing.</Card.Title>
              <Card.Text>
                PRW Specialise in chauffeuring VIP's, from everyday journeys to
                grand entrances at events. we're used to managing busy schedules
                and co-ordinating transport for large events. Let us take the
                stress out of getting to your event our professional drivers
                will take care of you in the vehicle of your choice. We believe
                in travelling not just in style but comfort! Our cars will make
                sure your journey to and from the required destination is higher
                than your expectations. Whatever your chauffeuring needs are, we
                are here to help.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg className="my-4">
          <Card className="bg-dark">
            <Card.Img variant="top" src="img/654180.jpg" />
            <Card.Body>
              <Card.Title>Always travel 'Business Class'...</Card.Title>
              <Card.Text>
                We have accumulated a wealth of experience in the corporate
                market and have many loyal customers based locally as well as
                all over the UK. We provide top of the range latest models
                chauffeur cars such as the new 'Mercedes S class' with executive
                packs to include wifi and IPads. Our Chauffeurs are highly
                proffesional, security trained, discreet & very smart, prompt
                and trustworthy and some are multi-lingual.We can also provide
                executive travel to all major European countries should you have
                to attend a meeting or conference.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg className="my-4">
          <Card className="bg-dark">
            <Card.Img variant="top" src="img/654175.jpg" />
            <Card.Body>
              <Card.Title>Transport to and from sets...</Card.Title>
              <Card.Text>
                When you have a long day on the set ahead of you, it helps to
                relax and feel comfortable beforehand. That’s why many
                production companies and professionals turn to The Executive Car
                Service for smooth, stress-free journeys to and from the set. As
                well as providing a personal service for individual clients,
                we’re also available to utilize our full range of vehicles in
                accommodating the needs of production companies and studios,
                ensuring all your cast, crew and VIPs arrive where they need to
                be, when they need to be there.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Cards;
