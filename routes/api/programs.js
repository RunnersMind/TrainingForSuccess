const router = require("express").Router();
const programsController = require("../../controllers/programsController");

// Matches with "/api/programs"
router.route("/")
  .get(programsController.findAll)
  .post(programsController.create);

// Matches with "/api/programs/:id"
router
  .route("/:id")
  .get(programsController.findByCoach)
  .get(programsController.findById)
  .put(programsController.update)
  .delete(programsController.remove);

module.exports = router;