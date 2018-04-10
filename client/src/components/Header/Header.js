import React, { Component } from 'react';

import API   from "../../utils/API";

import './Header.css';
import logoG from './google-logo.png';

class Header extends Component {

  state = {
    userName: '',
    isLoggedIn: false
  };

  componentDidMount(){
    console.log("HERE");
    API.getUserLoggedin()
      .then(res => {
        // console.log(res.data);
        if(res.data){
          this.setState({ userName: res.data.displayName });
          this.setState({ isLoggedIn: true });
        }
        else{
          this.setState({ userName: "" });
          this.setState({ isLoggedIn: false });          
        }
      }, err => console.log(err));
  }

  render() {

    const isLoggedIn = this.state.isLoggedIn;
    // console.log(isLoggedIn);
    return (
      <div className='nav'>
        <ul>
          <li>
            {isLoggedIn
              ?(<span> Hello, {this.state.userName}! | 
                <a href="/api/logout">Log Out</a></span>)
              :(<span>Login With <a href="/auth/google">
                <img className="logo-google" alt="google" src={logoG}/>
                </a></span>)
            }
          </li>
          <li>
            <a href="/program">Add New Program</a>
          </li>
          <li>
            <a href='/user'>User Profile</a>
            </li>
          <li>
            <a href='/search'>Search</a>
          </li>
          <li>
            <a href='/training-plan'>Training Plan</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
