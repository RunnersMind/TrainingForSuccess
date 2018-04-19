import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import API   from "../../utils/API";

import './Header.css';
// import logoG from './google-logo.png';

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
            <Link to="/add-program">Add New Program</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
