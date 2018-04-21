import React from "react";
import { Container, Row, Col } from 'reactstrap';
import UserComponent from "../components/User";
import ProgramListComp from "../components/ProgramList";
import RaceDayCountdown from "../components/RaceDayCountdown";


const User = () => {
return (
<Container fluid className="mt-5">
<Row>
  <Col sm="6">
  <UserComponent />
  <ProgramListComp />
  </Col>
  <Col sm="6">
  <RaceDayCountdown />
  </Col>
</Row>
</Container>
)
}

export default User;
