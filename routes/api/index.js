const router = require("express").Router();
const programRoutes = require("./programs");

// program routes
router.use("/programs", programRoutes);

module.exports = router;
