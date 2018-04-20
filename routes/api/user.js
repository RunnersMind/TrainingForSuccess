const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
//this one happens when we load /user and need to retrieve the user id from the header
router.route("/")
  .get(usersController.findById)
  //edit user
  .put(usersController.updateUser);

// Matches with "/api/user/id"
//this is if you click on a link to an athlete from a coach's page, i.e. we already have the id and will pass it
router.route("/:id")
  .get(usersController.findById)
  //edit user
  .put(usersController.updateUser);

router.route("/info/:id")
  .get(usersController.findInfoById);

module.exports = router;