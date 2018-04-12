const router = require("express").Router();
const planController = require("../../controllers/plansController");

// Matches with "/api/plan/add-new-workout", body prog-id, prog-day, workout-name, descr
router.route("/add-new-workout")
  .post(planController.addNewWorkout);

// Matches with "/api/plan/add-workout", body: prog-id, prog-day, workout-id
router.route("/add-workout")
  .post(planController.addWorkout);

// Matches with "/api/plan/remove-workout/:id, id=TrainingPlanId
router.route("/remove-workout/:id")
  .delete(planController.removeWorkout);

module.exports = router;