import React, { Component }from "react";
// import { Link } from 'react-router-dom';


import API   from "../../utils/API";

import logoR from "./runality2.svg"

// import { Nav, NavItem} from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

import './Navbar.css';

class NavbarGoogle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName    : '',
      userIsCoach : false,
      isLoggedIn  : false,

      navIsOpen      : false,
    };

    this.toggle = this.toggle.bind(this);
  
  }
  
  toggle() {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    });
  }

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
      <div>
      <Navbar color="dark" dark expand="md" className="navbar fixed-top navbar-dark bg-dark navbar-top justify-content-between">
        <NavbarBrand href="/">
          <img className="logo-runality" alt="runality" src={logoR} style={{width:70, height:40}} />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse className='menu-left-up' isOpen={this.state.navIsOpen} navbar>
          <Nav className="ml-0" navbar>
            <NavItem>
              <NavLink className="action-group text-uppercase text-light pl-2 pr-2" href='/'><i className="fas fa-search"></i></NavLink>
            </NavItem>
            {isLoggedIn
            ?(
              <NavItem>
                  <NavLink className="action-group text-light text-uppercase pl-2 pr-2" href='/user'>PROFILE</NavLink>
              </NavItem>
            ) : ''}
            {isCoach ? (
              <NavItem>
                <NavLink className="action-group text-uppercase text-light pl-2 pr-2" href='/add-program'>ADD PROGRAM</NavLink>
              </NavItem>
            ) : ''}
          </Nav>
        </Collapse>
        <Nav>
          {isLoggedIn ? (
              <div className='greeting text-uppercase'>{this.state.userName}</div>
            ) : ''}
          {isLoggedIn ? (
            <NavItem className="action-group text-light text-uppercase pl-2 pr-2">
              <a href="/api/logout">Log Out</a>
            </NavItem>              
            ) : (
            <NavItem className="action-group text-light text-uppercase pl-2 pr-2">
              <a href="/auth/google">Login With <i className="fab fa-google-plus-g"></i></a>
            </NavItem>
            )}
        </Nav>
      </Navbar>
      </div>
    );

  }
}
export default NavbarGoogle;