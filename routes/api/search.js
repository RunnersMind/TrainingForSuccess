const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/search/coachname"
router.route("/coachname/:text")
  .get(searchController.findByCoachName);

router.route("/program/:text")
  .get(searchController.findByProgram);

router.route("/zipcode/:text")
  .get(searchController.findByZipCode);

router.route("/state/:text")
  .get(searchController.findByState);

module.exports = router;
