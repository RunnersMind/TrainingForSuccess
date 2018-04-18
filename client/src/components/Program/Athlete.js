import React, {Component} from 'react';
import "./Athlete.css";

import API from "../../utils/API";

class Athlete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId     : props.user_id,

      userName 		: '',
      userPicture : '',

      userLoaded : false
    };
  }
  componentDidMount(){
  	this.getUser(this.state.userId);
  }

  getUser(id){

  	API.getUserInfo(id)
  		.then(res=>{
  			this.setState({
  				userName : res.data.displayName,
  				userPicture : res.data.photo,
  			});
  			this.setState({ userLoaded : true })
  		}, error =>{
  			console.log('API.getUserInfo.error:', error);
  	});
  }

  render() {
    return (
			<div className="athlete">
		    {this.state.userLoaded ? (
	      	<div className="user_avatar">
	      		{this.state.userPicture ? (
		      		<img alt="user" src={this.state.userPicture}></img>
	      			) : (
	      			<i className="fas fa-user-circle large-avatar-ico"></i>
	      		)}
	      		<span>{this.state.userName} </span>
	      	</div>
	    		) : ( <div></div> )}
	   	</div>
	  );
	}
};

export default Athlete;


