const db = require("../models");
const Op = db.Sequelize.Op;

const ATTR_workout = ['id', 'workoutName', 'workoutDescription', 'coachId'];

module.exports = {

  findByCoach: function(req, res){
    if(req.isAuthenticated()){
      db.Workout.findAll({
        attributes: ATTR_workout,
        where: { [Op.and]: [
          { deleteFlag: 0 }, 
          { coachId: req.user.id }
        ]}
      }).then( workouts => {
        res.json(workouts);
      }, error => {
        console.log('findWorkoutByCoach_'+ error);
        res.status(422).json(error);
      });
    }
    else res.redirect('/'); 
  },
 
  findById: function(req, res){
    db.Workout.findById( req.params.id, { include: [ db.TrainingPlan ] })
    .then( workout => {
      res.json(workout);
    }, error => {
      console.log('findWorkoutById_'+ error);
      res.status(422).json(error);
    });

  }
};
