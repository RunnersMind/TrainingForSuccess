import axios from "axios";

export default {
  // ====== Programs ==============
  // Gets all programs
  getPrograms: function() {
    return axios.get("/api/programs");
  },
  // Gets all programs for authenticated coach
  getCoachPrograms: function(coach_id) {
    return axios.get("/api/programs/user"+ coach_id);
  },
  //Gets all programs user signed up for
  getUserPrograms: function(user_id){
    //to do
    // return axios.get("/api/programs/athlete"+ user_id);
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

  // ======== Workouts ===============
  getCoachWorkouts(){
    return axios.get("/api/workouts/coach/")
  },
  
  getWorkout(id){
    return axios.get("/api/workouts/" + id);
  },

  //========= Training Plan ==========

  addWorkoutToProgram(workout_id, planData){
    if( workout_id )
      return axios.post("/add-workout/" + workout_id);
    else
      return axios.post("/add-new-workout");
  },

  removeWorkoutFromProgram(id){
    return axios.delete("/remove-workout/" + id);
  }
};