import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
      <Router>
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
            <Link to="/program">Add New Program</Link>
          </li>
          <li>
            <Link to='/user'>User Profile</Link>
            </li>
          <li>
            <Link to='/search'>Search</Link>
          </li>
          <li>
            <Link to='/training-plan'>Training Plan</Link>
          </li>
        </ul>
      </div>
      </Router>
    );
  }
}

export default Header;
