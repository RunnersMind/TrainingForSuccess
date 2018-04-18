import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
  	<div className='list-item'>
    {props.children}
    </div>
  </li>
);
