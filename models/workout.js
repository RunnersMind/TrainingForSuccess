module.exports = function(sequelize, Sequelize) {
    var Workout = sequelize.define("Workout", {
  
        workoutName: {
            type: Sequelize.STRING,
            allowNull: false
        },

        workoutDescription: {
            type: Sequelize.STRING,
            allowNull: true
        },

        coachId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        deleteFlag: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },

        deleteDate: {
            type: Sequelize.DATE,
            allowNull: true
        },
    });
  
  
    //associate Workout model to the userWorkout model
    // Workout.associate = function(models) {
    //     Workout.belongsToMany( models.Program,{ 
    //         through: { model: 'TrainingPlan', unique: false }, 
    //         foreignKey: 'workoutId', 
    //         constraints: false
    //     });
    // };
  
    return Workout;
};
  
    