import React from 'react';
import './Services.css';
import road from "./road.jpg"
import team from "./team.jpg"
import track from "./track.jpg"
import rain from "./rain.jpg"
import coach from "./coach.jpg"
import { Container, Card, CardImg, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';

const Services = (props) => {
  return (
    <Container fluid>
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={coach} alt="Card image cap" />
        <CardBody>
          <CardTitle>Find Running Coaches</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={track} alt="Card image cap" />
        <CardBody>
          <CardTitle>Personalize Your Training</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={team} alt="Card image cap" />
        <CardBody>
          <CardTitle>Connect With Teamates</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
    </CardDeck>
    </Container>
  );
};

export default Services;