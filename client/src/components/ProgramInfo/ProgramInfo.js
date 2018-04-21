import React, {Component} from "react";
import { Link } from 'react-router-dom';

import API from "../../utils/API";
import dates from "../../utils/dates";

import "./ProgramInfo.css";

class ProgramInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

      loggedInUserId: props.loggedUser || 0,
      searchedUserId : props.searchedUser || 0,

      progId : props.programId || 0,
      progName : props.programName,
      progDescr : props.programDescr,
      startDate : props.startDate,
      endDate  : props.endDate,

      approved : props.approved,
      subscribed : props.subscribed,

      loggedInUserRights : false,

      result : '',

    };

    this.subscribeUserToProgram = this.subscribeUserToProgram.bind(this);

  }

  subscribeUserToProgram(event){
    event.preventDefault();
    let program = this.state.progId;
    console.log('subscribing user:'+this.state.loggedInUserId+" to program: "+program);
    if(program){
    API.subscribeUser({ program_id : program })
      .then(res => {
        console.log("SUCCESS");
        this.setState({
          subscribed : true, 
          result: "success"
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({ result: "error"});
      });
    }
  }

  render (){
    console.log(this.state);
    return (
    <div className='program_data'>


      {this.state.approved ?(
        <h4> <Link to={ "/program/" + this.state.progId } > {this.state.progName} </Link></h4>
      ) : (
        <div>
        <h4 className="title-left"> 
          {this.state.progName} 
        </h4>
          {this.state.subscribed ?(
            <span className="msg-info">
              (Pending)
            </span>
            ):(
            <div>
              {this.state.loggedInUserId ? (
              <button className='prog-btn' onClick={this.subscribeUserToProgram}> Subscribe </button>
              ):''}
            </div>
            )}
        </div>
      )}

      <div className="program_descr">
        {this.state.progDescr}
      </div>
      <div className="program_dates">
        Start Date: {dates.format_for_display(this.state.startDate)}
        <br/>
        End Date : {dates.format_for_display(this.state.endDate)}
      </div>
    </div>
    );
  } 
}
export default ProgramInfo;
