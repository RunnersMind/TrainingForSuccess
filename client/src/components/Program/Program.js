import React, {Component} from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import { List, ListItem } from "../../components/List";

import ProgramInfo from '../ProgramInfo';
import UserInfo from '../UserInfo';

import TrainingPlan from './TrainingPlan';

import API from "../../utils/API";
import dates from "../../utils/dates";

import 'react-accessible-accordion/dist/fancy-example.css';
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
      loaded : false,

      isAuthorised : false,
      authId : 0,

      change_counter : 0,

    };

    this.handleAthleteBtnClick = this.handleAthleteBtnClick.bind(this);
  
  };

  componentDidMount(){
    this.authUser();
  }

  authUser(){
    API.getUserLoggedin()
      .then(res => {
        if(res.data.id ) this.setState({ authId : res.data.id });
        else return this.setState({ isAuthorised: false });

        this.getProgram();

      }, err => {
        window.location.pathname='/';
        // console.log(err)
      }
    );
  }

  getProgram(){

      // console.log("Getting PROGRAM data");

      let id = this.state.programId;
      this.setState({ loaded: false });
      API.getProgram(id)
        .then(res => {
          if( this.state.authId === res.data.program.coachId ){
            this.setState({ isAuthorised:true });
          }
          else {
            let in_list  = 0;
            let athletes = res.data.program.Users;
            for(let i=0; i < athletes.length; i++){
              if(athletes[i].id === this.state.authId)
                in_list++;
            }
            if( in_list ) this.setState({ isAuthorised:true });
            else window.location.pathname='/';
          }
          // console.log('Program.js: getProgram: ',res.data.program);
          // console.log('Program.js: getUsers: ',res.data.users);
          this.setState({ 
            // program: res.data.program,
            canEdit      : (res.data.rights==='canEdit') ? true : false,
            startDate    : res.data.program.programStartDate,
            endDate      : res.data.program.programEndDate,
            programName  : res.data.program.programName,
            programDescr : res.data.program.programDescription,
            coachId      : res.data.program.coachId,
            athletesList : res.data.users,
            trainingPlan : res.data.program.TrainingPlans,
            calStartDate : dates.format_for_calendar(res.data.program.programStartDate),
            calEndDate 	 : dates.format_for_calendar(res.data.program.programEndDate),
          });

          this.setState({ loaded: true });
          // console.log("GOT THE PROGRAM");
        },err => {
          console.log(err);
          this.setState({ msg: "error"});
      });
  }

  handleAthleteBtnClick(event){
    event.preventDefault();
    // console.log(event.target.id);

    let program = this.state.programId;
    let [action, user_id] = event.target.id.split('_'); 

    if( action === 'approve' ){
      // console.log('approving user '+user_id+' for program '+ program);
      API.approveUser({ 
        program_id : program,
        user_id : user_id
      })
      .then(res => {
        // console.log("Approved!");
        let counter = this.state.change_counter + 1;
        this.setState({
          change_counter : counter, 
        })
      })
      .catch(err => {
        console.log(err);
        // this.setState({ result: "error"});
      });
    }
    else if( action === 'decline' ){
      // console.log('declining user '+user_id+' for program '+ program);
      API.declineUser({ 
        program_id : program,
        user_id : user_id
      })
      .then(res => {
        // console.log("Declined!");
        let counter = this.state.change_counter + 1;
        this.setState({
          change_counter : counter, 
        })
      })
      .catch(err => {
        console.log(err);
        // this.setState({ result: "error"});
      });
    }

    this.getProgram();

  }

  render() {
    return (
      <div className='container'>
      {this.state.isAuthorised ?( 
        <div>
        {this.state.loaded ?(
        <div className="my-5">
          <ProgramInfo
            programName={this.state.programName}
            programDescr={this.state.programDescr}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
          <UserInfo user_id={this.state.coachId} />
          <div className="clearfix"></div>
        </div>
        ) : 'Loading program info ...'}
        <div className ='athletes_list'>
        <Accordion>
      		<AccordionItem>
          	<AccordionItemTitle>
              <h5> Athletes <i className="fas fa-angle-down"></i> </h5>
          	</AccordionItemTitle>
            <AccordionItemBody>
	            {this.state.athletesList.length ? (
	            	<div className="athletes_list">
	              <List>
	                {this.state.athletesList.map(user => (
	                  <ListItem key={user.id}>
                      <UserInfo user_id={user.id} />
                      {user.UserProgram.approved ? ''
                      :(
                      <div>
                        <div className='pending'>(Pending)</div>
                        {this.state.canEdit ? (
                          <div className="user_prog_btn_group">
		    	                  <button className="prog-btn approve-btn m-2" id={'approve_'+user.id} onClick={this.handleAthleteBtnClick}>
                              <i className="fas fa-check"></i> Accept
			    	    	 					</button>
			    				     			<button className="prog-btn decline-btn m-2" id={'decline_'+user.id} onClick={this.handleAthleteBtnClick}>
			    						   		  Decline
			    							    </button>			    					
                          </div>
                          ) : '' }
                      </div>
                    )}

	                  </ListItem>
	                ))}
	              </List>
	              </div>
	            ) : (
	              <h5>No Results to Display</h5>
	            )}

            </AccordionItemBody>
		      </AccordionItem>
		    </Accordion>
        </div>
      	<br/>
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
      		: 'Loading Training Plan ...' 
      	}
        </div>
      ) : <h1>Unauthorized</h1>}
    </div>

	)}
};

export default Program;