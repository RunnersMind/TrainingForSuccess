import React, { Component } from "react";
import { Container } from "reactstrap";
// import { Container, Card, CardHeader, CardText } from "reactstrap";

import { List, ListItem } from "../../components/List";
import ProgramInfo from '../ProgramInfo';
import UserInfo from '../UserInfo';

import API from "../../utils/API";

import "./ProgramList.css";

class ProgramListComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      loggedInUserId: 0,
      loggedInuserType : "athlete",

      searchedUserId : props.user_id || '',

      programListCoach : [],
      coachListLoaded : false,

      programListAthlete : [],//if on own profile page
      athleteListLoaded : false,

    };
  }
  componentDidMount() {
      this.loadList();
  }
  
  loadList = () => {
    // let s_user_id = this.state.searchedUserId;
    // console.log('searched user: ', s_user_id);
    API.getUserLoggedin().then(res => {
      let searched = this.state.searchedUserId ;
      if(!searched && res.data.id) searched = res.data.id;
      this.setState({ 
        loggedInUserId: res.data.id, 
        loggedInuserType: res.data.userType,
        searchedUserId: searched,
      });
      console.log("logged user: ", res.data.id);
      if( res.data && (res.data.id === parseInt(this.state.searchedUserId, 10)) ){
        this.getSubscribedPrograms();
      }
      this.getCoachPrograms();
    }).catch(err => {
      //try show programs created by searched_user in any case.
      this.getCoachPrograms();
      console.log(err);
    });
  }

  getCoachPrograms(){
    console.log("getCoachPrograms...");
    //if no searchedUser, should return data for logged in user
    let user = this.state.searchedUserId || this.state.loggedInUserId;
    if(!user) return ;

    API.getCoachPrograms(user) 
      .then( res=>{
        if( res.data.rights === 'canEdit' ){
          let programs = res.data.programs.map( prog_item => {
            let prog = prog_item;
            prog.approved = true;
            return prog;
          });
          this.setState({
             programListCoach : programs,
             coachListLoaded : true,
          });        
          console.log('coaches owned prog:',this.state.programListCoach);
          return;          
        }
        //not the owner, so check privileges
        let programs = res.data.programs.map( prog_item => {

          let prog = prog_item;
          let subscrList = res.data.subscribed;
          console.log("SUBSCR=",subscrList);
          if( !subscrList ) {
            prog.approved = false;
            prog.subscribed = false;
          }
          else{
            subscrList.forEach( subscr_item => {
              if( subscr_item.programId === prog.id) {
                prog.subscribed = true;
                if( subscr_item.approved )
                  prog.approved = true;
                else
                  prog.approved = false;
              }
            });
          }
          return prog; // for programs.map
        }); 
        this.setState({
           programListCoach : programs,
           coachListLoaded  : true,
        });        
        console.log('coaches prog:', this.state.programListCoach);
      }, err=>{
        console.log(err)
    });


  }

  getSubscribedPrograms(){
    console.log("getsubscrPrograms...",this.state.loggedInUserId);
    API.getUserPrograms(this.state.loggedInUserId)
      .then(res=>{
        console.log('subscribed: ',res.data);
        this.setState({
           programListAthlete : res.data.programs,
           athleteListLoaded  : true,
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
              <div className="mb-5">
                {this.state.programListAthlete.length ?( 
                  <div><h5 className="subscribed pl-4"><i className="far fa-check-square"></i> Subscribed:</h5>
                  <List>
                    {this.state.programListAthlete.map( item=>(
                      <ListItem key={ item.program.id }>
                        <ProgramInfo 
                          approved={ item.approved }
                          subscribed={ true }
                          programId={ item.program.id }
                          programName={ item.program.programName }
                          programDescr={ item.program.programDescription }
                          startDate={ item.program.programStartDate }
                          endDate={ item.program.programEndDate }
                        />
                        <UserInfo 
                          user_id={item.program.coachId} 
                        />
                        <div className="clearfix"></div>
                      </ListItem>
                    ))}
                  </List>
                  </div>
                ): '' }
              </div>
              <div>
                {this.state.programListCoach.length ? (
                  <div className="mb-5"><h5 className="created mt-5 pl-4"><i className="far fa-edit"></i> Created:</h5>
                  <List l={this.state.coachListLoaded}>
                    {this.state.programListCoach.map( program=>(
                      <ListItem key={program.id+' '+this.state.coachListLoaded}>
                        <ProgramInfo
                          loggedUser={ this.state.loggedInUserId }
                          searchedUser={ this.state.searchedUserId }
                          approved={ program.approved }
                          subscribed={ program.subscribed }
                          programId={ program.id } 
                          programName={ program.programName }
                          programDescr={ program.programDescription }
                          startDate={ program.programStartDate }
                          endDate={ program.programEndDate }
                        />
                      </ListItem>
                    ))}
                  </List>
                  </div>
                ):''}
              </div>
          </div>
        </Container>
      );
  }
}


export default ProgramListComp;
