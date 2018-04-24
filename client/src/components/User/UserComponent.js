import React, { Component } from "react";
import { Container } from 'reactstrap';
import API from "../../utils/API";
import DATES from "../../utils/dates";
import "./User.css";

const def_image_url = "https://fch.lisboa.ucp.pt/sites/default/files/assets/images/avatar-fch-9_2.png";

function setPhoto(url){
  let user_photo = url;
  if(user_photo){
    try {
      user_photo = user_photo.split('=')[0] + '=200';
    }
    catch(err) {
      console.log('photo is not google-format');
      console.log(err);
    }
  }
  else user_photo = def_image_url;
  return user_photo;
}

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //this is the ID of the user being rendered
      id: "",
      urlId: props.user_id,
      //this default should probably be replaced with a local file
      photo: "",//https://fch.lisboa.ucp.pt/sites/default/files/assets/images/avatar-fch-9_2.png",
      email: "",
      name: "",
      isCoach: false,
      userType: "athlete",
      isCoach: false,
      tShirtSize: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",
      birthDate: "",
      gender: "",
      //this default is set to true when the user viewing is the same as the user whose page it is
      isEditable: false,
      wantstoEdit: false
    }
  }

componentDidMount() {
  this.loadUser();
}

setStateFromData( data, editable ){

    this.setState({
      id          : data.id, 
      photo       : setPhoto(data.photo),
      email       : data.email, 
      name        : data.displayName, 
      userType    : data.userType,
      isCoach     : data.userType === 'coach' ? true : false,
      tShirtSize  : data.tShirtSize, 
      phone       : data.phone, 
      address1    : data.address1, 
      address2    : data.address2, 
      city        : data.city, 
      state       : data.state, 
      country     : data.country, 
      zipcode     : data.zipcode, 
      birthDate   : data.birthDate, 
      gender      : data.gender,

      isEditable  : editable,
    });  
}

loadUser() {

  //let's see if there's a URL parameter in the request and load that as the user first
  if (this.state.urlId) {
    // console.log("User: URLid = ", this.state.urlId);
    API.getUser(this.state.urlId)
      .then(res => {

        let canEdit = false;
        API.getUserLoggedin()
        .then(logged_user => {
          console.log("HERE: ",logged_user.data,this.state.urlId);
          if(logged_user.data && (parseInt(logged_user.data.id) === parseInt(this.state.urlId))){
            console.log("HERE 2 = canEdit: ", canEdit);
            canEdit = true;
          }
          this.setStateFromData(res.data, canEdit);
        }, error => {
          this.setStateFromData(res.data, false);
          console.log(error);
        })
      }, err => console.log(err));
  }

  //if there isn't a url parameter, then it's probably the user logging in, so let's check who's logged in instead
  else {
    // console.log("User: no URLid");
    API.getUserLoggedin()
    .then(res => {
      if(!res.data) window.location.pathname='/';
      this.setStateFromData(res.data, true);
    })
    .catch(err => {
      window.location.pathname='/';
      console.log("User is trying to hit /user without being logged in" + err);
    });
  }


}

setEditRights = (tempUser) => {

    if(tempUser === this.state.id){
      this.setState({isEditable: true});
    }
    else{
      console.log("No edit rights");
    }
}

  // //testing updating user
  // var testID = 1;
  // var testData = {
  //   displayName: "FUCKING HELL"
  // };
  // this.updateUser(testID,testData);

  updateUserFunc = (data) => {

    API.updateUser(data)
        .then(res => {
          alert("Profile updated!");
        })
        .catch(err => {
          console.log(err);
          this.setState({ result: "error"});
        })
  }


  enableEditForm = () => {
    this.setState({ wantstoEdit: true })

  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("User update: ", this.state);
    var userData = {
      displayName   : this.state.name, 
      birthDate     : this.state.birthDate,
      email         : this.state.email,
      userType      : this.state.isCoach ? 'coach' : 'athlete',
      tShirtSize    : this.state.tShirtSize,
      phone         : this.state.phone,
      address1      : this.state.address1,
      address2      : this.state.address2,
      city          : this.state.city,
      state         : this.state.state,
      country       : this.state.country,
      zipcode       : this.state.zipcode,
      gender        : this.state.gender,

    };

    this.updateUserFunc(userData);

    //hide edit form again
    this.setState({ wantstoEdit: false })

  }

  handleInputChange = event => {

    this.setState({validation_msg: ""});
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;
    console.log(name, value);
    this.setState({
      [name]: value
    });

  }

//need to write some code to enable a checkbox for coach state
// handleCoachState = event => {
//   let value = event.target.value;
//   const name = event.target.name;
//   console.log(value);
// }


  render() {
    
    const isEditable = this.state.isEditable;
    const wantstoEdit = this.state.wantstoEdit;


    return (
      //primary wrapper
      <Container fluid className="profile">

        <div className="profile-widget bg-light">
          <div id="athlete-page">
            <div id="left-column">
              
              <div id="photo">
                <img className="rounded-circle" alt="user" src={this.state.photo }></img></div>
              </div>

              <div id="isCoach">
                {this.state.isCoach
                ?<span>Coach</span>
                : <span>Athlete</span>}
              </div>
              
              <div className="Info">
                <h2 className="my-name my-3">
                  <span>{this.state.name}</span>
                </h2>
                <p>
                  <i className="icon far fa-envelope mr-2"></i>
                  <span> {this.state.email}</span>
                </p>
                <p>
                  <i className="icon fas fa-map-marker-alt mr-2"></i>
                  <span> {this.state.city || "City"}, {this.state.state || "State"}</span>
                </p>
                <p>
                  <i className="mr-2"></i>
                  {this.state.birthDate ?
                  <span> { DATES.format_for_display(this.state.birthDate) }</span>
                  : '' }
                </p>
              </div>

              <div className="edit-profile pb-3"> 
                {isEditable ? (<small><i className="fas fa-pencil-alt mr-2"></i><a href="#" onClick={this.enableEditForm}>edit profile</a></small>) : (<span></span>)}
              </div>

                {wantstoEdit ? (<form className="form">
                  <hr/>
                  <br/><br/>
                  <label>
                    <h5>Edit Profile</h5> 
                    <br/><br/>
                     <label>
                        Are you a coach?
                        <input
                          name="isCoach"
                          type="checkbox"
                          checked={this.state.isCoach}
                          onChange={this.handleInputChange} />
                      </label>
                      <br />
                    <input
                      value={this.state.name}
                      name="name"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Name"
                      className="name_input"
                    />
                    <input
                      value={this.state.email}
                      name="email"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Email"
                      className="email_input"
                    />
                    <input
                      value={this.state.tShirtSize}
                      name="tShirtSize"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="T-Shirt Size"
                      className="tshirt_input"
                    />
                    <input
                      value={this.state.phone}
                      name="phone"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Phone"
                      className="phone_input"
                    />
                    <input
                      value={this.state.address1}
                      name="address1"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Address Line 1"
                      className="address1_input"
                    />
                    <input
                      value={this.state.address2}
                      name="address2"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Address Line 2"
                      className="address2_input"
                    />
                    <input
                      value={this.state.city}
                      name="city"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="City"
                      className="city_input"
                    />
                    <input
                      value={this.state.state}
                      name="state"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="State"
                      className="state_input"
                    />
                    <input
                      value={this.state.country}
                      name="country"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Country"
                      className="country_input"
                    />
                    <input
                      value={this.state.zipcode}
                      name="zipcode"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Zipcode"
                      className="zipcode_input"
                    />
                    <input
                      value={this.state.birthDate}
                      name="birthDate"
                      onChange={this.handleInputChange}
                      type="date"
                      placeholder="Birthday"
                      className="birthday_input"
                    />
                    <input
                      value={this.state.gender}
                      name="gender"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Gender"
                      className="gender_input"
                    />
                  </label>


                  <br/><br/>
                  <button onClick={this.handleFormSubmit}>Update</button>
                </form>)
               : (<span></span>)}
              

          </div>
        </div>


      </Container>





    );
  }
}

export default User;