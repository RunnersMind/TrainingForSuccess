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
      result            : "",
      onAdd             : props.onAdd

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
    if( this.state.workoutId ||
      (this.state.workoutName && this.state.workoutDescr)) {

      this.addWorkoutToPlan({
        workout_name  : this.state.workoutName,
        workout_descr : this.state.workoutDescr,
        program_id    : this.state.workoutProgramId,
        program_day   : this.state.workoutProgramDay,
        workout_id    : this.state.workoutId
      });

      this.setState({
        workoutName      : "",
        workoutDescr     : "",
        workoutId        : 0,
        validation_msg   : ""
      });
      
      if (typeof this.props.onAdd === 'function') {
        this.props.onAdd();
      }
      // if (typeof this.state.onAdd === 'function') {
      //   this.state.onAdd();
      // }
    }
    else {
      this.setState({validation_msg: "Please, provide Workout!"});
      return;      
    }
  }

  render() {
    return (
      <div>

        <div className="addWorkout_validation">
          {"  "}{this.state.validation_msg}
        </div>
        <div className="addWorkout_result">
          {"  "}{this.state.result}
        </div>
        <form className="form">
          {this.state.workoutList.length ? (
            <label>
              Select Workout or

              <select 
                className="workout_input"
                name="workoutId"
                value={0}
                onChange={this.handleInputChange}
              >
                <option value={0}>{''}</option>
                {this.state.workoutList.map( item =>
                  (<option value={item.id} key={item.id}>{item.workoutName}</option>)
                )}
              </select>
            </label>
            ) : (
              <div></div>
            )}
          <label>
            Create New Workout
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
          </label>
          <br/><br/>
          <button onClick={this.handleFormSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default WorkoutsForm;
