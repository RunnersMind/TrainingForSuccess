import React, { Component }from "react";
import { Link } from 'react-router-dom';


import API   from "../../utils/API";

import logoR from "./runality2.svg"
import './Navbar.css';
import {
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

    class NavbarGoogle extends Component {

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
  <nav className="navbar fixed-top navbar-dark bg-dark navbar-top justify-content-between">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
        <img className="logo-runality" alt="runality" src={logoR} style={{width:70, height:40}} />
        </a>
      </div>
      <Nav pullRight>
      <NavItem>
             <Link to='/user'>PROFILE</Link>
            </NavItem>
            <NavItem>
            <Link to='/search'>SEARCH</Link>
            </NavItem>
  <NavItem type={NavLink} className="action-group text-light text-uppercase pl-2 pr-2">{isLoggedIn
              ?(<span> Hello, {this.state.userName}!
                <a href="/api/logout">Log Out</a></span>)
              :(<span><a href="/auth/google">Login With <i className="fab fa-google-plus-g"></i>
                </a></span>)
            }</NavItem>
</Nav>
    </div>
  </nav>
);
}
}
export default NavbarGoogle;