import React, { Component }from "react";
import { Link } from 'react-router-dom';


import API   from "../../utils/API";

import logoR from "./runality2.svg"

import { Nav, NavItem} from 'reactstrap';
import './Navbar.css';

class NavbarGoogle extends Component {

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
      }, err => console.log(err)
    );
  }

  render() {

    const isLoggedIn = this.state.isLoggedIn;
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
              <Link className="action-group text-uppercase pl-2 pr-2" to='/'>SEARCH</Link>
            </NavItem>

            {isLoggedIn
            ?(<div><NavItem>
                <Link className="action-group text-uppercase pl-2 pr-2" to='/user'>PROFILE</Link>
              </NavItem></div>)
            : ''
            }
          </Nav>
          <Nav>
            <NavItem className="action-group text-light text-uppercase pl-2 pr-2">
              {isLoggedIn
              ?(<div> <div className='greeting'>{this.state.userName}</div>
                <a href="/api/logout">Log Out</a></div>)
              :(<div><a href="/auth/google">Login With <i className="fab fa-google-plus-g"></i>
                </a></div>)
              }
            </NavItem>
          </Nav>
        </div>
      </nav>
    );

  }
}
export default NavbarGoogle;