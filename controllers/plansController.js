const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {

  addNewWorkout: function(req, res){
    console.log("controller: Adding NEW WORKOUT");
    //body: prog-id, prog-day, workout-name, descr
    if(req.isAuthenticated()){
      //1.add workout to Workout table -> id
      let new_workout = {
        workoutName        : req.body.workout_name,
        workoutDescription : req.body.workout_descr,
        coachId            : req.user.id
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
    else res.redirect('/');
  },

  addWorkout: function(req, res){
    console.log("controller: Adding WORKOUT");
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
    else res.redirect('/');
  },

  removeWorkout: function(req, res){
  // TrainingPlanId
    if( req.isAuthenticated() ){
      db.TrainingPlan.destroy({
        where: { [Op.and]: [
          { id : req.body.program_id }, 
          { id : req.params.workout_id },
          { id : req.params.program_day },          
        ]}
      }).then(result=> res.status(200).send(),
        error => res.status(422).json(error)
      );
    }
    else res.redirect('/');
  }

};
