import React, { Component } from "react";
import API from "../../utils/API";
import "./ProgramForm.css";

class ProgramForm extends Component {

  state = {
    programName: "",
    programDescription: "",
    programStartDate: "",
    programEndDate: ""
    // result: ""
  };

  addProgram = query => {
    API.addProgram(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {

    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();

    // if (this.state.startDate < this.state.endDate) {
    //   alert("Check your Start and End dates, please!");
    // } else {
      alert(`Adding New Program!`);

      this.addProgram(this.state);
      this.setState({
        programName: "",
        programDescription: "",
        programStartDate: "",
        programEndDate: ""
      });
    // }
  };

  render() {
    return (
      <div>
        <p>
          New Program
        </p>
        <form className="form">
          <input
            value={this.state.programName}
            name="programName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Program Name"
          />
          <input
            value={this.state.programStartDate}
            name="programStartDate"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Start Date"
          />
          <input
            value={this.state.programEndDate}
            name="programEndDate"
            onChange={this.handleInputChange}
            type="text"
            placeholder="End Date"
          />
          <input
            value={this.state.programDescription}
            name="programDescription"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Program Description"
          />
          <button onClick={this.handleFormSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default ProgramForm;
