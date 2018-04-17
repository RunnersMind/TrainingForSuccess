import React from "react";
import { Container } from 'reactstrap';
import UserComponent from "../components/User";
import ProgramListComp from "../components/ProgramList";


const User = () => {
return (
<Container fluid className="bg-light">
  <UserComponent />
  <ProgramListComp />

</Container>
)
}

export default User;
