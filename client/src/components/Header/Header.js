import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <ul className='nav'>
          <li className="nav-item">
            {isLoggedIn
              ?(<p> Hello, {this.state.userName}! _
                <a href="/api/logout">Log Out</a>_</p>)
              :(<p>Login With <a href="/auth/google">
                <img className="logo-google" alt="google" src={logoG}/>
                </a>||</p>)
            }
          </li>
          <li className="nav-item">
            <Link to="/program">Add New Program</Link> _
          </li>
          <li className="nav-item">
            <Link to='/user'>User Profile</Link> _
            </li>
          <li className="nav-item">
            <Link to='/search'>Search</Link> _
          </li>
          <li className="nav-item">
            <Link to='/training-plan'>Training Plan</Link> _
          </li>
          <li className="nav-item">
            <Link to='/add-workout'>Add Workout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
