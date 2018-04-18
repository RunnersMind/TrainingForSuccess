import axios from "axios";

export default {
  // ====== Programs ==============
  // Gets all programs
  getPrograms: function() {
    return axios.get("/api/programs");
  },
  // Gets all programs for authenticated coach
  getCoachPrograms: function(coach_id) {
    return axios.get("/api/programs/user" + coach_id);
  },
  //Gets all programs user signed up for
  getUserPrograms: function(user_id){
    return axios.get("/api/programs/user/" + user_id);
  },
  // Gets the program with the given id
  getProgram: function(id) {
    return axios.get("/api/programs/" + id);
  },
  // Adds a new program to the database
  addProgram: function(programData) {
    return axios.post("/api/programs", programData);
  },
  // Updates the program
  updateProgram: function(id, programData) {
    return axios.put("/api/programs" + id, programData);
  },
  // Deletes the program with the given id
  deleteProgram: function(id) {
    return axios.delete("/api/programs/" + id);
  },
  //========== User ===================

  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },

  getUserLoggedin: function() {
    return axios.get("/api/current_user");
  },

  getUserInfo: function(id) {
    return axios.get("/api/user/info/" + id);
  },

  // ======== Workouts ===============
  getCoachWorkouts(coach_id){
    return axios.get("/api/workouts/coach/" + coach_id);
  },

  getWorkout(id){
    return axios.get("/api/workouts/" + id);
  },

  //========= Training Plan ==========

  addWorkoutToProgram(planData){
    if( planData.workout_id > 0  )
      return axios.post("/api/plan/add-workout/", planData);
    else
      return axios.post("/api/plan/add-new-workout", planData);
  },

  removeWorkoutFromProgram(data){
    return axios.post("/api/plan/remove-workout" , data);
  },

  //=========== Search Results ===============
  getSearchResults(type, text){
    switch (type){
      case 'Coach': return axios.get("/api/search/coachname/" + text);

      case 'Program': return axios.get("/api/search/program/" + text);

      case 'Zip Code': return axios.get("/api/search/zipcode/" + text);

      case 'State': return axios.get("/api/search/state/" + text);


    }
  }
};   