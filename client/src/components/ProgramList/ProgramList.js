import React, { Component } from "react";
import API from "../../utils/API";
import "./ProgramList.css";


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
          <div className="program-list" >
            <div>
                Your Programs:
            </div>
            <ul>
              <li>Name: {this.state.programName}</li>
              <li>Description: {this.state.programDescription}</li>
              <li>Start date: {this.state.programStartDate}</li>
              <li>End date: {this.state.programEndDate}</li>
            </ul>
          </div>
        );
      }
    }
    
    export default ProgramListComp;