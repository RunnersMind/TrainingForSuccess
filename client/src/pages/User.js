import React from "react";
import { Container, Row, Col } from 'reactstrap';
import UserComponent from "../components/User";
import ProgramListComp from "../components/ProgramList";


const User = () => {
return (
<Container fluid className="mt-5">
<Row>
  <Col sm="6">
  <UserComponent />
  </Col>
  <Col sm="6">
  <ProgramListComp />
  </Col>
</Row>
</Container>
)
}

export default User;
