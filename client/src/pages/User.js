import React from "react";
import { Container, Row, Col } from 'reactstrap';
import UserComponent from "../components/User";
import ProgramListComp from "../components/ProgramList";
// import RaceDayCountdown from "../components/RaceDayCountdown";
import weather from "./weather.png"
import countdown from "./countdown.png"
import miles from "./miles.png"
// import progress from "./progress.png"


const User = (props) => {
return (
<Container fluid className="user-container mt-5">
<Row>
  <Col classname="justify-conetent-center" sm="6">
  <UserComponent user_id={props.match.params.id}/>
  {/* <div><img className="progress" alt="progress" src={progress} style={{width:200}} /></div> */}
  <ProgramListComp user_id={ props.match.params.id}/>
  </Col>
  <Col sm="6">
  <div><img className="weather img-fluid mb-5" alt="weather" src={weather} style={{width:600}} /></div>
  <div><img className="countdown img-fluid my-5" alt="countdown" src={countdown} style={{width:600}} /></div>
  <div><img className="miles img-fluid my-5" alt="miles" src={miles} style={{width:600}} /></div>
  </Col>
</Row>
</Container>
)
}

export default User;
