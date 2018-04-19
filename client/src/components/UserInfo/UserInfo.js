import React, {Component} from 'react';
import "./UserInfo.css";

import API from "../../utils/API";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId     : props.user_id,

      userName 		: props.userName,
      userPicture : props.userPictire,

      userLoaded : false
    };
  }
  componentDidMount(){
    if( this.state.userName ) return;
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
  			<div className="user_info">
  		    {this.state.userLoaded ? (
  	      	<div className="user_avatar">
  	      		{this.state.userPicture ? (
  		      		<img alt="user" src={this.state.userPicture}></img>
  	      			) : (
  	      			<i className="fas fa-user-circle large-avatar-ico"></i>
  	      		)}
  	      		<span>{this.state.userName} </span>
  	      	</div>
  	    		) : ''}
  	   	</div>
	  );
	}
};

export default UserInfo;
