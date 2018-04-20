import React from 'react';
import './Divider.css';
import { Container } from 'reactstrap';

const Divider = (props) => {
    return (
<div>
<section className="divider pt-5 pb-5 text-white">
      <Container>
        <div className="row">
          <div className="col-sm">
            <h1 className="mb-5 text-left">#GOALS</h1>
          </div>
        </div>
    </Container>
    </section>
        </div>
    );
};

export default Divider;