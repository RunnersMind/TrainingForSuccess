const router 		= require("express").Router();
const programRoutes = require("./programs");
const userRoutes 	= require("./user");
const workoutRoutes = require("./workout");
const planRoutes 	= require("./plan");

// program routes
router.use("/programs", programRoutes);

// user routes
router.use("/user", userRoutes);

// workout routes
router.use("/workouts", workoutRoutes);

// workout routes
router.use("/plan", planRoutes);

module.exports = router;
