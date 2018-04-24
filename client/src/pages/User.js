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
		<Container fluid className="mt-5">
			<Row>
			  <Col className="pl-5" sm="6">
				  <UserComponent user_id={props.match.params.id}/>
				  <ProgramListComp user_id={ props.match.params.id } />
			  </Col>
			  <Col className="pr-5" sm="6 justify-content-center">
				  <div><img className="weather my-5" alt="weather" src={weather} style={{width:600}} /></div>
				  <div><img className="countdown my-5" alt="countdown" src={countdown} style={{width:600}} /></div>
				  <div><img className="miles my-5" alt="miles" src={miles} style={{width:600}} /></div>
			  </Col>
			</Row>
		</Container>
	)
}

export default User;
