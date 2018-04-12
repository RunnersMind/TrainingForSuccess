import React from 'react';
import './Signup.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Form } from 'reactstrap';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}SIGNUP MODAL TEST</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h2>SIGNUP</h2></ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup>
          <FormGroup>
          <Label for="FirstName">First Name</Label>
          <Input type="FirstName" name="FirstName" id="exampleFirstName" placeholder="FirstName placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="LastName">Last Name</Label>
          <Input type="LastName" name="LastName" id="exampleLastName" placeholder="LastName placeholder" />
        </FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Re-Enter Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="Address" name="Address" id="exampleAddress" placeholder="Address placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCity">City</Label>
          <Input type="City" name="City" id="exampleCity" placeholder=" City placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">State</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="example Zip">Zip Code</Label>
          <Input type="zipcode" name="zipcode" id="examplezipcode" placeholder="zipcode placeholder" />
        </FormGroup> */}
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I agree to terms
          </Label>
        </FormGroup>
      </Form> 
          </ModalBody>
          <ModalFooter> 
          <Button className="login-button mt-3" onClick={this.toggle}>SIGNUP</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Signup;