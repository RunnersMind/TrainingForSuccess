import React from 'react';
import './Results.css';
import { Container, Card, CardHeader, CardBody, Row, Col, Table } from 'reactstrap';


const Results = () => {
  return (
    <Container>
       <Row>
       <Col>
         <Card className="mb-3">
           <CardHeader><h2>Results</h2></CardHeader>
           <CardBody>
             <Table responsive>
               <thead>
                 <tr>
                   <th><i class="fas fa-user"></i></th>
                   <th>Name</th>
                   <th>Location</th>
                   <th>Contact</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <th scope="row"><i class="fas fa-user-circle"></i></th>
                   <td>Dominic Chelini</td>
                   <td>San Carlos, CA</td>
                   <td><button type="button" className="results-button btn text-center btn-outline-light pl-3 p-r-4">View Profile</button></td>
                 </tr>
                 <tr>
                   <th scope="row"><i class="fas fa-user-circle"></i></th>
                   <td>Kevin Moore</td>
                   <td>Burlingame, CA</td>
                   <td><button type="button" className="results-button btn text-center btn-outline-light pl-3 p-r-4">View Profile</button></td>
                 </tr>
                 <tr>
                   <th scope="row"><i class="fas fa-user-circle"></i></th>
                   <td>Jayna Neilson</td>
                   <td>Redwood City, CA</td>
                   <td><button type="button" className="results-button btn text-center btn-outline-light pl-3 p-r-4">View Profile</button></td>
                 </tr>
               </tbody>
             </Table>
           </CardBody>
         </Card>
       </Col>
     </Row>
      
    </Container>
  );
};

export default Results;