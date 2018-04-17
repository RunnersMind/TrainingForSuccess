import React, {Component} from 'react';
import Modal              from 'react-modal';
import BigCalendar        from 'react-big-calendar';
import moment             from 'moment';

import WorkoutsForm from './WorkoutsForm';

import API from "../../utils/API";
import dates from "../../utils/dates";

import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./TrainingPlan.css";

// Setup the localizer by providing the moment Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment);

Modal.setAppElement('#root')

const modalCustomStyles = {
  content : {
    top                   : '30vh',
    left                  : '35vw',
    right                 : 'auto',
    bottom                : 'auto',
    zIndex                : '15',
    minWidth              : '40vw',
    backgroundColor       : 'rgb(200,200,200)'
  },
  overlay : {
    zIndex          : '12',
    backgroundColor : 'rgba(250,250,250,0.7)'    
  }
};

class TrainingPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programId     : props.program_id,
      coachId       : props.coach_id,

      trainingPlan  : props.training_plan,

	    startDate     : props.program_start,
	    endDate       : props.program_end,
      canEdit       : props.can_edit,

      workoutList   : [],
      eventList     : [],

      modalIsOpen   : false,
      progDay       : null,

      modal2IsOpen      : false,
      currWorkoutName   : "",
      currWorkoutDescr  : "",
      currWorkoutId     : 0,

      msg : '',

    };

    this.handleSlotClick = this.handleSlotClick.bind(this);
    this.handleEventClick = this.handleEventClick.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);

    this.remove_wo = this.remove_wo.bind(this);
  };

  componentDidMount(){
    console.log("*** Training Plan ***");
    this.createEventList();
  }

  createEventList(){

    if(this.state.coachId){

      API.getCoachWorkouts(this.state.coachId)
        .then(res=>{

          const tr_plan = this.state.trainingPlan;
          const wo_list = res.data;

          let event_list = [];
          let index = 0;

          for(let i=0; i < tr_plan.length; i++){
            for(let j=0; j < wo_list.length; j++){
              
              if( tr_plan[i].WorkoutId === wo_list[j].id ){
                const eventDate = dates.format_for_calendar(this.get_event_date(tr_plan[i].workoutDay));
                event_list.push({
                  id        : index,
                  title     : wo_list[j].workoutName,
                  wo_descr  : wo_list[j].workoutDescription,        
                  wo_id     : wo_list[j].id,
                  wo_day    : tr_plan[i].workoutDay,
                  allDay    : true,
                  start     : eventDate,
                  end       : eventDate,
                });
                index++;
                break;
              }
            }
          }
          // console.log("EVENTS", event_list);
          // console.log("WORKOUTS", wo_list);
          this.setState({ workoutList : wo_list,
                          eventList   : event_list 
          });

        },error=>{
          console.log(error);
          this.setState({result:"error: can't get workouts"});
      });
    }

  }
  
  get_event_date(n){
    let start = moment(this.state.startDate).add(n-1, 'days');
    return start.format();
  }

  getPlan(id){
      API.getProgram(this.state.programId)
        .then(res => {
          console.log('Program.js: getProgram: ',res.data.program);
          this.setState({ 
            trainingPlan : res.data.program.TrainingPlans,
          });
          this.createEventList();
          console.log("got the Training Plan");
        },err => {
          console.log(err);
          this.setState({ msg: "error"});
      });
  }

  handleSlotClick(slotInfo){
    // selected slot: 
    //   slotInfo.start.toLocaleString()
    //   slotInfo.end.toLocaleString()
    //   slotInfo.action

    if( this.state.canEdit ){
      let start = this.state.startDate;
      let end = this.state.endDate;
      let programMaxDays = moment(end).diff(moment(start), 'days')+1;

      let clickedDate = moment(slotInfo.start);
      let programDay = clickedDate.diff(this.state.startDate, 'days')+1;

      if(programDay <=0 || programDay > programMaxDays) {
        console.log("this day doesn't belong to program")
        return;
      }
      console.log(programDay);
      this.setState({progDay: programDay});

      this.openModal();
    }
  }

  handleEventClick(event){
    console.log(event);
    this.setState({ 
      currWorkoutName   : event.title,
      currWorkoutDescr  : event.wo_descr,
      progDay           : event.wo_day,
      currWorkoutId     : event.wo_id
    });
    this.openModal2();
  }

  remove_wo_from_events(wo, day){
    let event_arr = this.state.eventList;
    for(let i=0; i < event_arr.length; i++){
      if(event_arr[i].wo_day === day && event_arr[i].wo_id === wo){
        event_arr.splice(i, 1);
        break;
      }
    }
    this.setState({
      eventList    : event_arr,
      modal2IsOpen : false
    });
  }

  remove_wo(){
    API.removeWorkoutFromProgram({
      program_id  : this.state.programId, 
      workout_id  : this.state.currWorkoutId,
      program_day : this.state.progDay        
    });
    this.remove_wo_from_events(this.state.currWorkoutId, this.state.progDay);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.getPlan();
    // this.getProgram(this.state.programId);
    this.setState({modalIsOpen: false});
  }

  openModal2() {
    this.setState({modal2IsOpen: true});
  }

  closeModal2() {
    this.setState({modal2IsOpen: false});
  }

  render() {
    return (
      <div className='container calendar'>
        <h3>
          Training Plan
        </h3>
        <div className="addProgram_validation">
          {"  "}{this.state.result}
        </div>
    		<BigCalendar
          selectable
		      events={this.state.eventList}
		      views={['month']}
		      defaultView='month'
		      scrollToTime={this.state.endDate}
		      defaultDate={this.state.startDate}
		      onSelectEvent={this.handleEventClick}
		      onSelectSlot={this.handleSlotClick}
		    />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalCustomStyles}
        >
          <button onClick={this.closeModal}>Close Modal</button>
          <hr/>
          <WorkoutsForm 
            day={this.state.progDay}
            programId={this.state.programId}
            woList={this.state.workoutList}
            onAdd={this.closeModal}
          />
        </Modal>

        <Modal
          isOpen={this.state.modal2IsOpen}
          onRequestClose={this.closeModal2}
          style={modalCustomStyles}
        >
          <button onClick={this.closeModal2}>Close Modal</button>          
          <hr />
          <h3>{this.state.currWorkoutName}</h3>
          Day {this.state.progDay},<br/>
          {this.state.currWorkoutDescr}
          <hr />
          {this.state.canEdit
            ? <button onClick={this.remove_wo}>Remove Workout</button> 
            : ``
          }
        </Modal>

      </div>

    );
  }
}

export default TrainingPlan;