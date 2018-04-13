const router = require("express").Router();
const workoutsController = require("../../controllers/workoutsController");

// Matches with "/api/workouts/coach"
router.route("/coach")
  .get(workoutsController.findByCoach);

// Matches with "/api/workouts/:id"
router.route("/:id")
  .get(workoutsController.findById);

module.exports = router;