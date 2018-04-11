const router = require("express").Router();
const programsController = require("../../controllers/programsController");

// Matches with "/api/programs/coach/:id"
router.route("/coach/:id?")
  .get(programsController.findByCoach);

// Matches with "/api/programs/:id"
router.route("/:id")
  .get(programsController.findById)
  .put(programsController.update)
  .delete(programsController.remove);

// Matches with "/api/programs"
router.route("/")
  .get(programsController.findAll)
  .post(programsController.create);


module.exports = router;