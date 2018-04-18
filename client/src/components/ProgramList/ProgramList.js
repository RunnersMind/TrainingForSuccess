import React, { Component } from "react";
import API from "../../utils/API";
import "./ProgramList.css";
import { Container, Card, CardHeader, CardText } from "reactstrap";


class ProgramListComp extends Component {
  state = {
    userID: "",
    programName: "",
    programDescription: "",
    coachId: "",
    programStartDate: "",
    programEndDate: ""
  };

componentDidMount() {
    this.loadList();
  }
  
loadList = () => {
    API.getUser().then(res => {
        this.setState({userID: res.data.id})
    }).catch(err => console.log(err));

    // the user call is working, we have the ID 
    API.getUserPrograms(this.state.userID)
    .then(res => {
          console.log(JSON.stringify(res.data.programs[0].programName));
          this.setState({ programName: res.data.programs[0].programName, programDescription: res.data.programs[0].programDescription, programStartDate: res.data.programs[0].programStartDate, programEndDate: res.data.programs[0].programEndDate })
        })
      .catch(err => console.log(err));
  
    };

    render() {
        return (
          //primary wrapper
          <Container fluid className="program-list my-5" >
            <div>
                <h2 className="text-center">PROGRAMS</h2>
                <hr></hr>
            </div>
            <Card className="m-5">
              <CardHeader className="text-center text-white bg-dark" tag="h5">{this.state.programName}</CardHeader>
              <CardText className="mt-2 pl-5 py-2">{this.state.programDescription}</CardText>
              <CardText className="pl-5 py-2">Start date: {this.state.programStartDate}</CardText>
              <CardText className="pl-5 py-2">End date: {this.state.programEndDate}</CardText>
            </Card>
          </Container>
        );
      }
    }
    
    export default ProgramListComp;