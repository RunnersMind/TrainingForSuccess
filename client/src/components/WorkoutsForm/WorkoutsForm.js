import React, { Component } from "react";
import API from "../../utils/API";

import "./WorkoutsForm.css";

class WorkoutsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutName: "",
      workoutDescr: "",
      workoutProgramDay : props.day,
      workoutProgramId  : props.programId,
      workoutId         : 0,
      workoutList       : props.woList,
      validation_msg    : "",
      result: ""
    };
  }

  addWorkoutToPlan = query => {
    API.addWorkoutToProgram(query)
      .then(res => {
        this.setState({ 
          result: "success"
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({ result: "error"});
      });
  }

  createOptList(){
    let options: [];
    for(let i=0; i < this.state.workoutList; i++){
      let workout = this.state.workoutList[i];
      options.push({
        value: workout.id,
        label: workout.workoutName
      });
    }
    return options;
  }

  handleInputChange = event => {
    this.setState({validation_msg: ""});
    let value = event.target.value;
    const name = event.target.name;
    // console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if((!this.state.workoutId) &&
        !(this.state.workoutName && this.state.workoutDescr)){
      this.setState({validation_msg: "Please, provide Workout!"});
      return;
    }
    // console.log("NAME="+this.state.workoutName);
    this.addWorkoutToPlan({
      workout_name  : this.state.workoutName,
      workout_descr : this.state.workoutDescr,
      program_id    : this.state.workoutProgramId,
      program_day   : this.state.workoutProgramDay,
      workout_id    : 0//this.state.workoutId
    });

    this.setState({
      workoutName      : "",
      workoutDescr     : "",
      workoutId        : 0,
      validation_msg   : ""
    });
  }

  render() {
    let wo_options = this.createOptList();
    return (
      <div>

        <p> DAY : {this.state.workoutProgramDay}</p>
        <p> PROGRAM : {this.state.workoutProgramId}</p>
        <div className="addWorkout_validation">
          {"  "}{this.state.validation_msg}
        </div>
        <div className="addWorkout_result">
          {"  "}{this.state.result}
        </div>
        <form className="form">
          <p>Select Workout</p>
          <input 
            value={this.state.workoutId}
            name="workoutId"
            onChange={this.handleInputChange}
            type="select"
            className="workout_input"
            options={wo_options}
          />
          <p>or Create New</p>
          <input
            value={this.state.workoutName}
            name="workoutName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Workout Title"
            className="workout_input"
          />
          <input
            value={this.state.workoutDescr}
            name="workoutDescr"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Workout Description"
            className="workout_input"
          />
          <br/><br/>
          <button onClick={this.handleFormSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default WorkoutsForm;
