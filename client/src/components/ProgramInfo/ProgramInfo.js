import React, { Component } from "react";
import { Link } from 'react-router-dom';
import dates from "../../utils/dates";

import "./ProgramInfo.css";


const ProgramInfo = (props) =>{
  return (
  	<div className='program_data'>
  		{props.programId ?(
	      <h4> <Link to={ "/program/" + props.programId } > {props.programName} </Link></h4>
  		) : (
      	<h1> {props.programName} </h1>  		
  		)}
      <div className="program_descr">
      	{props.programDescr}
      </div>
      <div className="program_dates">
      	Start Date: {dates.format_for_display(props.startDate)}
      	<br/>
      	End Date : {dates.format_for_display(props.endDate)}
      </div>
    </div>

  );
} 
export default ProgramInfo;