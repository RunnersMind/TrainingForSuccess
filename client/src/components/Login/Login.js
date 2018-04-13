import React from 'react';
import './Login.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Form } from 'reactstrap';

class Login extends React.Component {
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
        <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}LOGIN MODAL TEST</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h2>Login</h2></ModalHeader>
          <ModalBody>
          <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" placeholder="user@runality.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I agree to the terms of service
          </Label>
        </FormGroup>
      </Form> 
      <Button className="login-button mt-3" onClick={this.toggle}>LOGIN</Button>{' '}
          </ModalBody>
          <ModalFooter> 
            <Button color="secondary" onClick={this.toggle}>LOGIN WITH STRAVA <i class="fab fa-strava"></i></Button>{' '}
            <Button color="dark" onClick={this.toggle}>LOGIN WITH GOOGLE <i class="fab fa-google-plus-g"></i></Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;