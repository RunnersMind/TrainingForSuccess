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
          <CardText className="mt-3">Find training based on your location/area. View the profiles of certified coaches and connect with those who offer the programs you are searching for.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={shoes} alt="Card image cap" />
        <CardBody>
          <CardTitle>Personalized Training</CardTitle>
          <CardText className="mt-3">We offer an online product with a holistic approach to training. We want your coaching to remain personal and specific to your goals/needs. As it should be.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={team} alt="Card image cap" />
        <CardBody>
          <CardTitle>Meet Other Runners</CardTitle>
          <CardText className="mt-3">Running is just as much of a community as it is personal. We want to increase opportunites to connect and form comaraderie amongst other runners local or online.</CardText>
        </CardBody>
      </Card>
    </CardDeck>
    </Container>
  );
};

export default Services;