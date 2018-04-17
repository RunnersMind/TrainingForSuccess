import React from "react";
import ProgramComponent from "../components/Program";


const Program = (props) => {
	return (
		<div>
		  <ProgramComponent 
			  program_id={props.match.params.id}
		  />
		</div>
	)
}

export default Program;
