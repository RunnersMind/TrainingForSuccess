import React, { Component } from "react";
import API from "../utils/API";

class User extends Component {
  state = {
    id: ""
  };

componentDidMount() {
  this.loadUser();
}

loadUser = () => {
  API.getUser()
    .then(res => {
      this.setState({ id: res.data.id })
      console.log(res);
    })
    .catch(err => console.log(err));
};


  render() {
    return (
      <p>User id: {this.state.id}</p>
    );
  }
}

export default User;