import React, { Component } from "react";
import logoG from './google-logo.png';
import "./LogIn.css";

class GoogleLogIn extends Component {

  state = {
    result: ""
  };

  handleButtonPress = event => {
    console.log('dddd');
    window.location = 'http://localhost:3000/auth/google';
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonPress}>
          <img className="logo-google" alt="google" src={logoG}/>
          {/* <span className="gl-btn">Login</span>*/}
        </button>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default GoogleLogIn;
