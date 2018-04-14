<<<<<<< Updated upstream
import React from "react";
import Jumbo from "../components/Jumbotron";
import UserComponent from "../components/User";


const User = () => {
return (
<div>
  <Jumbo />
  <UserComponent />
</div>

)
=======
import React, { Component } from "react";
import { Container } from 'reactstrap';
import API from "../utils/API";
import "./User.css";
import Avatar from "../components/Avatar";


class User extends Component {
  state = {
    id: "",
    //this default needs to get replaced with a local file
    photo: "https://fch.lisboa.ucp.pt/sites/default/files/assets/images/avatar-fch-9_2.png",
    name: "",
    userType: "",
    email: ""
  };


componentDidMount() {
  this.loadUser();
}

loadUser = () => {
  API.getUser()
    .then(res => {
      if (res.data.id === 'User not found'){
        console.log('Need to show the login button instead?');
      }
      else {
        this.setState({ id: res.data.id, photo: res.data.photo, name: res.data.displayName, email: res.data.email, location: res.data.country })
        console.log(res);
      }
    })
    .catch(err => console.log(err));

};

  render() {
    return (
//primary wrapper
<Container fluid>
      <div>
        <div>
          <p>User id for testing: {this.state.id}</p>
          <div></div>
        </div>


      <div id="athlete-page">
        <div id="left-column">
        <Avatar />
            <div id="photo"><img alt="user" src={this.state.photo}></img></div>
            <div>
            edit profile
            </div>
        </div>

    <div id="Info">
        <p>
            <strong>NAME</strong>
            <span>{this.state.name}</span>
        </p>
        <p>
            <strong>EMAIL</strong>
            <span>{this.state.email}</span>
        </p>
        <p>
            <strong>LOCATION</strong>
            <span>{this.state.location}</span>
        </p>
        <p>
            <strong>PROGRAMS</strong>
            <span>
                <ul>
                    <li>Program 1 (need to pull this from API)</li>
                    <li>Program 2 (need to pull this from API)</li>
                </ul>    
            </span>
        </p>
    </div>


    </div>


    </div>

  </Container>





    );
  }
>>>>>>> Stashed changes
}

export default User;