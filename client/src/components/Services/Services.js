import React from 'react';
import './Services.css';
import team from "./team.jpg"
import track from "./track.jpg"
import shoes from "./shoes.jpg"
import { Container, Card, CardImg, CardTitle, CardText, CardDeck, CardBody } from 'reactstrap';

const Services = (props) => {
  return (
    <Container fluid>
    <h1>Make your running goals a reality</h1>
    <CardDeck className="m-5">
      <Card>
        <CardImg top width="100%" src={track} alt="Card image cap" />
        <CardBody>
          <CardTitle>Local/Online Coaching</CardTitle>
          <CardText className="mt-3">Find training based on your location/area. View the profiles of certified coaches and connect with those who offer the programs you are looking for.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={shoes} alt="Card image cap" />
        <CardBody>
          <CardTitle>Personalized Training</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={team} alt="Card image cap" />
        <CardBody>
          <CardTitle>Meet Other Runners</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
    </CardDeck>
    </Container>
  );
};

export default Services;