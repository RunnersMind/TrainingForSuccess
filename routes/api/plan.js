const router = require("express").Router();
const plansController = require("../../controllers/plansController");

// Matches with "/api/plan/add-new-workout", body prog-id, prog-day, workout-name, descr
router.route("/add-new-workout")
  .post(plansController.addNewWorkout);

// Matches with "/api/plan/add-workout", body: prog-id, prog-day, workout-id
router.route("/add-workout")
  .post(plansController.addWorkout);

// Matches with "/api/plan/remove-workout, program_id, program_day, workout_id
router.route("/remove-workout")
  .post(plansController.removeWorkout);

module.exports = router;