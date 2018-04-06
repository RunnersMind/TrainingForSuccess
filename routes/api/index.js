const router = require("express").Router();
const programRoutes = require("./programs");
const userRoutes = require("./user");


// program routes
router.use("/programs", programRoutes);

// user routes
router.use("/user", userRoutes);


module.exports = router;
