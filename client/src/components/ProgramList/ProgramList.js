import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Card, CardHeader, CardText } from "reactstrap";

import { List, ListItem } from "../../components/List";
import ProgramInfo from '../ProgramInfo';
import UserInfo from '../UserInfo';

import API from "../../utils/API";
import dates from "../../utils/dates";

import "./ProgramList.css";

class ProgramListComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      userId: "",
      userType : "athlete",

      programListCoach : [],
      programListAthlete : [],

    };
  }

  componentDidMount() {
      this.loadList();
  }
  
  loadList = () => {
    API.getUser().then(res => {
      this.setState({ 
        userID: res.data.id, 
        userType: res.data.userType 
      });

      if( res.data.userType==='coach' ) this.getCoachPrograms();
      this.getSubscribedPrograms();

    }).catch(err => {
      console.log(err);
      // window.location.pathname = '/';
    });
  }

  getCoachPrograms(){
    API.getCoachPrograms('')
      .then(res=>{
        // console.log('coaches prog:',res.data);
        this.setState({
           programListCoach : res.data.programs
        });        
      }, err=>{
        console.log(err)
      });
  }

  getSubscribedPrograms(){
    API.getUserPrograms(this.state.userId)
      .then(res=>{
        console.log('subscribed: ',res.data);
        this.setState({
           programListAthlete : res.data.programs
        });        
      }, err=>{
        console.log(err)
      });
  }

  //   <Card className="m-5">
  //     <CardHeader className="text-center text-white bg-dark" tag="h5">{this.state.programName}</CardHeader>
  //     <CardText className="mt-2 pl-5 py-2">{this.state.programDescription}</CardText>
  //     <CardText className="pl-5 py-2">Start date: {this.state.programStartDate}</CardText>
  //     <CardText className="pl-5 py-2">End date: {this.state.programEndDate}</CardText>
  //   </Card>
  // </Container>

  render() {
      return (
        //primary wrapper
        <Container fluid className="program-list" >
          <div>
              <h2 className="text-center">PROGRAMS</h2>
              <hr/>
<<<<<<< Updated upstream
              <div>
                {this.state.programListAthlete.length ? (
                  <div><h5>Subscribed:</h5>
                  <List>
                    {this.state.programListAthlete.map(program=>(
                      <ListItem key={program.id}>
                        <ProgramInfo 
                          programId={program.id}
                          programName={program.programName}
                          programDescr={program.programDescription}
                          startDate={program.programStartDate}
                          endDate={program.programEndDate}
                        />
                        <UserInfo 
                          user_id={program.coachId} 
                        />
                        <div className="clearfix"></div>
                      </ListItem>
                    ))}
                  </List>
                  </div>
                ) : ('')}
              </div>
              <div>
                {this.state.programListCoach.length ? (
                  <div><h5>Created:</h5>
                  <List>
                    {this.state.programListCoach.map(program=>(
                      <ListItem key={program.id}>
                        <ProgramInfo 
                          programId={program.id}
                          programName={program.programName}
                          programDescr={program.programDescr}
                          startDate={program.startDate}
                          endDate={program.endDate}
                        />
                      </ListItem>
                    ))}
                  </List>
                  </div>
                ) : ('')}
              </div>
=======
              {this.state.programListCoach.length ? (
                <List>
                  {this.state.programListCoach.map(program=>(
                    <ListItem key={program.id}>
                      <div className='program_data'>
                        <h2> <Link className="program-link" to={ "/program/" + program.id } > {program.programName} </Link></h2>
                        <div className="program_descr">
                          {program.programDescription}
                        </div>
                        <div className="program_dates">
                          Start Date: {dates.format_for_display(program.programStartDate)}
                          <br/>
                          End Date : {dates.format_for_display(program.programEndDate)}
                        </div>
                        <div className="user_avatar">
                          <img alt="user" src={this.state.coachPicture}></img>
                          <span>Coach: {this.state.coachName} </span>
                        </div>
                      </div>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
>>>>>>> Stashed changes
          </div>
        </Container>
      )
  }
}


export default ProgramListComp;
