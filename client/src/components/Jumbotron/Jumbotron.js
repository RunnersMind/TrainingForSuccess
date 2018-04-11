import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Jumbotron.css';
import logoR from "./runality2.svg"

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
        <div className="row">
        <div className="col-sm"><img className="logo-runality" alt="runality" src={logoR} style={{width:400}} /></div>
        <div className="col-sm d-flex flex-column justify-content-center align-items-start">
          <h1 className="display-5 text-white">A virtual hub that connects Coaches, Runners and Teammates</h1>
          <p className="pt-3"><a href="" className="btn btn-outline-light btn-large">Learn more »</a></p>
          </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;