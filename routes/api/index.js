const router 		= require("express").Router();

const programRoutes = require("./programs");
const userRoutes 	= require("./user");
const workoutRoutes = require("./workout");
const planRoutes 	= require("./plan");

const searchRoutes  = require("./search"); 

// program routes
router.use("/programs", programRoutes);

// program routes
router.use("/search", searchRoutes);

// user routes
router.use("/user", userRoutes);

// workout routes
router.use("/workouts", workoutRoutes);

// workout routes
router.use("/plan", planRoutes);

module.exports = router;
