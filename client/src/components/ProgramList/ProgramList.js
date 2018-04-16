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
    API.getUserPrograms()
      .then(res => {
          console.log("Did anything come back??" + res);
        //   this.setState({ id: res.data.id, photo: res.data.photo, name: res.data.displayName, email: res.data.email, location: res.data.country })
        })
      .catch(err => console.log(err));
  
    };

    render() {
        return (
          //primary wrapper
            <div>
                Program List test user ID is: 
                {this.state.userID}
            </div>
    
        );
      }
    }
    
    export default ProgramListComp;