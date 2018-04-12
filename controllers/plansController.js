const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {

  addNewWorkout: function(req, res){
    //body: prog-id, prog-day, workout-name, descr
    if(req.isAuthenticated()){
      //1.add workout to Workout table -> id
      let new_workout = {
        workoutName       : req.body.workout_name,
        workoutDescripton : req.body.workout_descr,
        coachId           : req.user.id
      };
      db.Workout.create( new_workout )
        .then( workout => {
          let w_id = workout.id; 
          console.log(workout.get({ plain: true }));
          //2.add workout to TrainingPlans (w_id, )
          let day_plan = {
            WorkoutId  : w_id,
            ProgramId  : req.body.program_id,
            workoutDay : req.body.program_day
          };
          db.TrainingPlan.create( day_plan )
            .then( plan_day =>{
              res.status(200).json({workoutId: w_id});
            },err =>{
              res.status(422).json(err);
            });
        }, error => {
          console.log('create_program_'+ error);
          res.status(422).json(err);
      });      
    }
    else req.redirect('/');
  },

  addWorkout: function(req, res){
    //body: prog-id, prog-day, workout-id
    if(req.isAuthenticated()){
      // add workout to TrainingPlans (w_id, )
      let day_plan = {
        WorkoutId  : req.body.workout_id,
        ProgramId  : req.body.program_id,
        workoutDay : req.body.program_day
      };
      db.TrainingPlan.create( day_plan )
        .then( plan_day =>{
          res.status(200).json({result: "success"});
        },err =>{
          res.status(422).json(err);
      });
    }
    else req.redirect('/');
  },

  removeWorkout: function(req, res){
  // TrainingPlanId
    if( req.isAuthenticated() )
    db.TrainingPlan.destroy({
      where: { id : req.params.id }
    }).then(result=> res.status(200).send(),
      error => res.status(422).json(error)
    );

  }

};
