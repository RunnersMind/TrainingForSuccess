const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/search/results"
router.route("/user/:id?")
  .get(programsController.findByUser);

module.exports = router;