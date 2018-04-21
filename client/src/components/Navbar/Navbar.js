import React, { Component }from "react";
import { Link } from 'react-router-dom';


import API   from "../../utils/API";

import logoR from "./runality2.svg"

import { Nav, NavItem} from 'reactstrap';
import './Navbar.css';

class NavbarGoogle extends Component {

  state = {
    userName    : '',
    userIsCoach : false,
    isLoggedIn  : false,
  };

  componentDidMount(){
    API.getUserLoggedin()
      .then(res => {
        // console.log(res.data);
        if(res.data){
          this.setState({ 
            userName: res.data.displayName,
            userIsCoach: res.data.userType==='coach' ? true : false,
            isLoggedIn: true
          });
        }
        else{
          this.setState({ 
            userName: "",
            isLoggedIn: false
          });
        }
      }, err => console.log(err)
    );
  }

  render() {

    const isLoggedIn = this.state.isLoggedIn;
    const isCoach = this.state.userIsCoach;
    // console.log(isLoggedIn);
    return (

      <nav className="navbar fixed-top navbar-dark bg-dark navbar-top justify-content-between">
        <div className="container-fluid">
          <Nav>
            <div className="navbar-header">
              <a href="/" className="navbar-brand">
                <img className="logo-runality" alt="runality" src={logoR} style={{width:70, height:40}} />
              </a>
            </div>
            <NavItem>
              <Link className="action-group text-uppercase pl-2 pr-2" to='/'><i className="fas fa-search"></i></Link>
            </NavItem>

            {isLoggedIn
            ?(
              <NavItem>
                  <Link className="action-group text-uppercase pl-2 pr-2" to='/user'>PROFILE</Link>
              </NavItem>
            ) : ''}
            {isCoach ? (
              <NavItem>
                <Link className="action-group text-uppercase pl-2 pr-2" to='/add-program'>ADD PROGRAM</Link>
              </NavItem>
            ) : ''}

          </Nav>
          <Nav>
            {isLoggedIn ? (
                <div className='greeting text-uppercase'>{this.state.userName}</div>
              ) : ''}
            {isLoggedIn ? (
              <NavItem className="action-group text-light text-uppercase pl-2 pr-2">
                <a href="/api/logout">Log Out</a>
              </NavItem>              
              ) : (
              <NavItem className="action-group text-light text-uppercase pl-2 pr-2"><a href="/auth/google">Login With <i className="fab fa-google-plus-g"></i></a></NavItem>
              )}

          </Nav>
        </div>
      </nav>
    );

  }
}
export default NavbarGoogle;