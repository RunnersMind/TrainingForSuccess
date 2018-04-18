import React, {Component} from 'react';

import TrainingPlan from './TrainingPlan';

import API from "../../utils/API";
import dates from "../../utils/dates";

import "./Program.css";

class Program extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programId : props.program_id,
      canEdit : false,

      programName  : '',
      programDescr : '',
	    startDate 	 : '',
	    endDate 		 : '',
	    calStartDate : '',
	    calEndDate   : '',
	    trainingPlan : [],

      coachId 			: '',
      coachName 		: '',
      coachPicture  : '',

      athletesList : [],

      // modalIsOpen : false,

      msg : '',
      loaded : false

    };

  };

  // TO DO: check somewhere that API.getUserLoggedin() == coachId or is in Athletes list

  componentDidMount(){
    console.log("*** Program Component ***");
    this.getProgram(this.state.programId);
  }

  getCoach(id){
  	API.getUserInfo(id)
  		.then(res=>{
  			this.setState({
  				coachName : res.data.displayName,
  				coachPicture : res.data.photo,
  			});
  		}, error =>{
  			console.log('API.getUserInfo.error:', error);
  	});
  }

  getProgram(id){
  		this.setState({ loaded: false });
      API.getProgram(id)
        .then(res => {
          console.log('Program.js: getProgram: ',res.data.program);
          this.setState({ 
            // program: res.data.program,
            canEdit      : (res.data.rights==='canEdit') ? true : false,
            startDate    : res.data.program.programStartDate,
            endDate      : res.data.program.programEndDate,
            programName  : res.data.program.programName,
            programDescr : res.data.program.programDescription,
            coachId      : res.data.program.coachId,
            athletesList : res.data.program.Users,
            trainingPlan : res.data.program.TrainingPlans,
            calStartDate : dates.format_for_calendar(res.data.program.programStartDate),
            calEndDate 	 : dates.format_for_calendar(res.data.program.programEndDate),
          });
          this.getCoach(this.state.coachId);
          this.setState({ loaded: true });
          console.log("GOT THE PROGRAM");
        },err => {
          console.log(err);
          this.setState({ msg: "error"});
      });
  }

  render() {
    return (
      <div className='container'>
      	<div className='program_data'>
	        <h1>
	          {this.state.programName}
	        </h1>
	        <div className="program_descr">
	        	{this.state.programDescr}
	        </div>
	        <div className="program_dates">
	        	Start Date: {dates.format_for_display(this.state.startDate)}
	        	<br/>
	        	End Date : {dates.format_for_display(this.state.endDate)}
	        </div>
	      	<div className="user_avatar">
	      		<img alt="user" src={this.state.coachPicture}></img>
	      		<span>Coach: {this.state.coachName} </span>
	      	</div>
	      </div>
      	<hr/>
      	{this.state.loaded 
      		?(
		        <TrainingPlan 
		        	program_id={this.state.programId}
			    		program_start={this.state.calStartDate}
			    		program_end={this.state.calEndDate}
			    		coach_id={this.state.coachId}
			    		can_edit={this.state.canEdit}
			    		training_plan={this.state.trainingPlan}
		        />)
      		: 'Loading....' 
      	}
      </div>
	)}
};

export default Program;