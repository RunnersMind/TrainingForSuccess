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
      <div className='content'>
        <ul className='nav'>
          <li className="nav-item">
            <Link to='/'>Home</Link>
          </li>
          <li className="nav-item">
            {isLoggedIn
              ?(<span> Hello, {this.state.userName}!
                <a href="/api/logout">Log Out</a></span>)
              :(<span><a href="/auth/google">Login With 
                <img className="logo-google" alt="google" src={logoG}/>
                </a></span>)
            }
          </li>
          <li className="nav-item">
            <Link to="/add-program">Add New Program</Link>
          </li>
          <li className="nav-item">
            <Link to='/user'>User Profile</Link>
          </li>
          <li className="nav-item">
            <Link to='/training-plan'>Training Plan</Link>
          </li>
          <li className="nav-item">
            <Link to='/program/2'>Program</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
