import React, { Component } from "react";
import { Container } from 'reactstrap';
import API from "../../utils/API";
import "./User.css";


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //this is the ID of the user being rendered
      id: "",
      urlId: props.user_id,
      //this default should probably be replaced with a local file
      photo: "https://fch.lisboa.ucp.pt/sites/default/files/assets/images/avatar-fch-9_2.png",
      name: "",
      userType: "",
      email: "",
      //this default is set to true when the user viewing is the same as the user whose page it is
      isEditable: false
    }
  }
  // state = {
  //   id: "",
  //   test_user_id: props.user_id,
  //   //this default needs to get replaced with a local file
  //   photo: "https://fch.lisboa.ucp.pt/sites/default/files/assets/images/avatar-fch-9_2.png",
  //   name: "",
  //   userType: "",
  //   email: "",
  //   //this default is set to true when the user viewing is the same as the user whose page it is
  //   isEditable: false
  // };


componentDidMount() {
  this.loadUser();
  // this.test();
}

loadUser = () => {

  //let's see if there's a URL parameter in the request and load that as the user first
  if (this.state.urlId) {
    API.getUser(this.state.urlId)
      .then(res => {
        this.setState({ id: res.data.id, photo: res.data.photo, name: res.data.displayName, userType: res.data.usertype, email: res.data.email, location: res.data.country })
      })
      .catch(err => console.log(err));
  }

  //if there isn't a url parameter, then it's probably the user logging in, so let's check who's logged in instead
  else {
    API.getUserLoggedin()
    .then(res => {
      this.setState({ id: res.data.id, photo: res.data.photo, name: res.data.displayName, userType: res.data.usertype, email: res.data.email, location: res.data.country })
    })
    .catch(err => {
      window.location.pathname='/';
      console.log("User is trying to hit /user without being logged in" + err);
    });
  }

};

  // setEditRights = () => {
  //       // also set the edit rights while we're here
  //     if(res.data.id === this.state.id){
  //       this.setState({isEditable: true});
  //     }
  //     else{
  //       console.log("No edit rights");
  //     }
  // }

  render() {
    
    const isEditable = this.state.isEditable;

    return (
      //primary wrapper
      <Container fluid className="profile bg-light">
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