import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Jumbotron.css';
import logoR from "./runality2.svg"

const Jumbo = (props) => {
  return (
    <div>
        <Container className="jumbo" fluid>
        <div className="row py-5">
        <div className="col-sm"><img className="logo-runality" alt="runality" src={logoR} style={{width:400}} /></div>
        <div className="col-sm d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-5 text-white">A virtual hub that connects Coaches, Runners and Teammates</h1>
          <a href="#services" className="btn btn-outline-light btn-large mt-5">Learn more »</a>
          </div>
          </div>
        </Container>
    </div>
  );
};

export default Jumbo;