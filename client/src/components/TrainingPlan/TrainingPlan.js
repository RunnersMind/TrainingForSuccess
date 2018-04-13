import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import API from "../../utils/API";

import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./TrainingPlan.css";

// Setup the localizer by providing the moment Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment);

let events = [
  {
    id: 2,
    title: 'workout1',
    allDay: true,
    start: new Date(2018, 3, 21),
    end: new Date(2018, 3, 21),
  },
  {
    id: 0,
    title: 'workout with a very long title',
    allDay: true,
    start: new Date(2018, 3, 21),
    end: new Date(2018, 3, 21),
  },
  {
    id: 1,
    title: 'All Day',
    allDay: true,
    start: new Date(2018, 5, 6),
    end: new Date(2018, 5, 6),
  },
];

class TrainingPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	eventList : events,
	    startDate: new Date(2018, 3, 3),//apr 03
	    endDate: new Date(2018, 6, 6),
	    program : {},
      selectable : true,
	    result : '',
	    programId : 1 //props.program_id
    };
    // this.state = {
    // 	eventList : props.eventsList,
	   //  startDate: props.startDate,
	   //  endDate: props.endDate,
	   //  program : props.id,
	   //  result : ''
    // };

    // this.bindScopes([
    //   'handleSlotClick',
    //   'handleEventClick'
    // ]);

    this.handleSlotClick = this.handleSlotClick.bind(this);
    this.handleEventClick = this.handleEventClick.bind(this);
  };

  componentDidMount(){
    console.log("*** Training Plan ***");
  }

  getProgram(id){
    API.getProgram(id)
      .then(res => {
        this.setState({ program: res.data,result: "success" })
      })
      .catch(err => {
        console.log(err);
        this.setState({ result: "error"});
      });
  }
  handleSlotClick(slotInfo){
    // alert(
    //   `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
    //     `\nend: ${slotInfo.end.toLocaleString()}` +
    //     `\naction: ${slotInfo.action}`
    // );
    let clickedDate = moment(slotInfo.start);
    let programDay = clickedDate.diff(this.state.startDate, 'days')+1;
    console.log(programDay);
  }

  handleEventClick(event){
    console.log(event);
  }

  render() {
    return (
      <div className='container'>
        <p>
          Training Plan
        </p>
        <div className="addProgram_validation">
          {"  "}{this.state.result}
        </div>
    		<BigCalendar
		      selectable={this.state.selectable}
		      events={this.state.eventList}
		      views={['month']}
		      defaultView='month'
		      scrollToTime={this.state.endDate}
		      defaultDate={this.state.startDate}
		      onSelectEvent={this.handleEventClick}
		      onSelectSlot={this.handleSlotClick}
		    />
      </div>
    );
  }
}

export default TrainingPlan;