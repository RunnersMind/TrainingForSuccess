import React, { Component } from "react";
import API from "../../utils/API";

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

import "./ProgramForm.css";
import { Label, FormGroup, Form, Input } from "reactstrap";

class ProgramForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programName: "",
      description: "",
      startDate: null,
      endDate: null,
      focusedInput: null,
      result: "",
      validation_msg : ""
    };
  }

  addProgram = query => {
    API.addProgram(query)
      .then(res => {
        this.setState({ result: "success" })
      })
      .catch(err => {
        console.log(err);
        this.setState({ result: "error"});
      });
  }

  handleInputChange = event => {
    this.setState({validation_msg: ""});

    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleDatesChange = event => {
    this.setState({validation_msg: ""});
  }

  handleFormSubmit = event => {

    event.preventDefault();
      
      if(!this.state.programName || !this.state.description){
        this.setState({validation_msg: "Please, provide Program Name and Description!"});
        return;
      }
      if(!this.state.startDate || !this.state.endDate){
        this.setState({validation_msg: "Please, provide Program Start and End dates!"});
        return;
      }

      this.addProgram({
        programName       : this.state.programName,
        programDescription: this.state.description,
        programStartDate  : this.state.startDate,
        programEndDate    : this.state.endDate
      });

      this.setState({
        programName: "",
        description: "",
        startDate: null,
        endDate: null,
        focusedInput: null,
        validation_msg: ""
      });

    window.location.pathname='/user';

  }

  render() {
    return (
      <div className="add-program">
        <h2 className="my-5">
          Add New Program
        </h2>
        <hr></hr>
        <div className="addProgram_validation">
          {"  "}{this.state.validation_msg}
        </div>
        <Form className="form">
        <FormGroup className="mt-5">
        <Label><strong>Program Name</strong></Label>
          <Input
            value={this.state.programName}
            name="programName"
            onChange={this.handleInputChange}
            type="text"
            className="program_input"
          />
          </FormGroup>
          <FormGroup>
          <Label><strong>Program Description</strong></Label>
          <Input
            value={this.state.description}
            name="description"
            onChange={this.handleInputChange}
            type="text"
            className="program_input"
          />
          </FormGroup>
          
          <div className="mt-5">
          <DateRangePicker
            startDate={this.state.startDate}
            startDateId="start_date_id"
            endDate={this.state.endDate}
            endDateId="end_date_id"
            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
          />
          </div>
          <br/><br/>
          <button className="program-button btn btn-outline-dark"onClick={this.handleFormSubmit}>Add</button>
        </Form>
      </div>
    );
  }
}

export default ProgramForm;
