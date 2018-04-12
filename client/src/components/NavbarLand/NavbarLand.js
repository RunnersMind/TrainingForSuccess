import React from "react";
import logoR from "./runality2.svg"
import './NavbarLand.css';
import {
    Nav,
    NavItem,
    NavLink,} from 'reactstrap';

const NavbarLand = () => (
  <nav className="navbar fixed-top navbar-dark bg-dark navbar-top justify-content-between">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
        <img className="logo-runality" alt="runality" src={logoR} style={{width:70, height:40}} />
        </a>
      </div>
      <Nav pullRight>
  <NavItem type={NavLink} className="action-group text-light text-uppercase pl-2 pr-2" href="/" to="/">Login</NavItem>
  <NavItem className="action-group text-light text-uppercase pl-2 pr-2" href="" to="">/</NavItem>
  <NavItem type={NavLink} className="action-group text-light text-uppercase pl-2 pr-2" href="/" to="/">Signup</NavItem>
</Nav>
    </div>
  </nav>
);
export default NavbarLand;