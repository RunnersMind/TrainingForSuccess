import axios from "axios";

export default {
  // Gets all programs
  getPrograms: function() {
    return axios.get("/api/programs");
  },
  // Gets all programs for authenticated coach
  getCoachPrograms: function(coach_id) {
    return axios.get("/api/programs/coach"+ coach_id);
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
  //=================

  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },

  getUserLoggedin: function() {
    return axios.get("/api/current_user");
  }

};