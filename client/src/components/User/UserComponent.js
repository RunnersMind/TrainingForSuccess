import React, { Component } from "react";
import { Container } from 'reactstrap';
import API from "../../utils/API";
import "./User.css";


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
        this.setState({ id: res.data.id, photo: res.data.photo, name: res.data.displayName, email: res.data.email, location: res.data.country })
      })
    .catch(err => console.log(err));

  };

  render() {
    return (
      //primary wrapper
      <Container fluid className="profile bg-light">
        {/* <div>
          <p>User id for testing: {this.state.id}</p>
        </div> */}
      <div id="athlete-page">
        <div id="left-column">
            <div id="photo"><img alt="user" src={this.state.photo.split('=')[0] + '=200' }></img></div>
            <div>
            edit profile
            </div>
        </div>
    <div className="Info">
        <h2 className="my-name my-3">
            <span>{this.state.name}</span>
        </h2>
        <p>
            <i className="far fa-envelope mr-2"></i>
            <span> {this.state.email}</span>
        </p>
        <p>
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span> {this.state.location}</span>
        </p>
    </div>
    <div>
    <small><i className="fas fa-pencil-alt mr-2"></i> edit profile</small>
            </div>


    </div>


    </Container>





    );
  }
}

export default User;