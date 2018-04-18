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
    email: "",
    //this default is set to true when the user viewing is the same as the user whose page it is
    isEditable: false
  };


componentDidMount() {
  this.loadUser();
  this.getUserLoggedin();
}

loadUser = () => {
  API.getUser()
    .then(res => {
        this.setState({ id: res.data.id, photo: res.data.photo, name: res.data.displayName, email: res.data.email, location: res.data.country })
      })
    .catch(err => console.log(err));

  }

  getUserLoggedin = () => {
    API.getUserLoggedin()
      .then(res => {
        //if the user we loaded is the same as the user that's logged in, then show the edit link
        if(res.data.id === this.state.id){
          this.setState({isEditable: true});
        }
        else{
          console.log("No edit rights");
        }
      }, err => console.log(err)
    );
  };

  render() {
    
    const isEditable = this.state.isEditable;

    return (
      //primary wrapper
      <Container fluid className="profile bg-light">
        {/* <div>
          <p>User id for testing: {this.state.id}</p>
        </div> */}
      <div id="athlete-page">
        <div id="left-column">
            <div id="photo"><img alt="user" src={this.state.photo.split('=')[0] + '=200' }></img></div>
        </div>
    <div className="Info">
        <h2 className="my-name my-3">
            <span>{this.state.name}</span>
        </h2>
        <hr></hr>
        <p>
            <i className="icon far fa-envelope mr-2"></i>
            <span> {this.state.email}</span>
        </p>
        <p>
            <i className="icon fas fa-map-marker-alt mr-2"></i>
            <span> {this.state.location}</span>
        </p>
    </div>
    <div>
        {isEditable ? (<small><i className="fas fa-pencil-alt mr-2"></i><a href="#">edit profile</a></small>) : (<span></span>)}

            </div>


    </div>


    </Container>





    );
  }
}

export default User;