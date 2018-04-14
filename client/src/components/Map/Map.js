import React from 'react';
import map from "./map.svg"
import { Container } from 'reactstrap';

const Map = (props) => {
    return (
<div>
<Container fluid>
<div clasName="bg-light">
      <div clasName="row justify-content-center">
        <div clasName="col-6 mt-5">
          <h1 clasName="display-5 text-center">Find Training ...</h1> 
        </div>
      </div>
    </div>
    </Container>

<Container fluid>
    <div clasName="bg-light">
      <div clasName="row justify-content-center">
        <div clasName="col-9 col-md-6 pt-5 pb-5">
        <img className="map" alt="us-map" src={map} />
        </div>
        </div>
        </div>
        </Container>
        </div>
    );
};

export default Map;