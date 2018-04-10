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
    title: 'button',
    allDay: true,
    start: new Date(2018, 3, 21),
    end: new Date(2018, 3, 21),
  },
  {
    id: 0,
    title: 'All Day Event very long title',
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
	    startDate: new Date(2018, 3, 3),
	    endDate: new Date(2018, 6, 6),
	    program : {},
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
    console.log(slotInfo);
  }
		      
  render() {
    return (
      <div>
        <p>
          Training Plan
        </p>
        <div className="addProgram_validation">
          {"  "}{this.state.result}
        </div>
    		<BigCalendar
		      selectable
		      events={this.state.eventList}
		      views={['month']}
		      defaultView='month'
		      scrollToTime={this.state.endDate}
		      defaultDate={new Date()}
		      onSelectEvent={event => alert(event.title)}
		      onSelectSlot={this.handleSlotClick}
		    />
      </div>
    );
  }
}

export default TrainingPlan;