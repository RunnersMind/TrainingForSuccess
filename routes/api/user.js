const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/user")
  .get(usersController.findById);

module.exports = router;