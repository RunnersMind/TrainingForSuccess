const router = require("express").Router();
const programsController = require("../../controllers/programsController");

// Matches with "/api/programs/user/:id"
router.route("/user/:id?")
  .get(programsController.findByUser);

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