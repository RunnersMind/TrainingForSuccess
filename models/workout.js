module.exports = function(sequelize, Sequelize) {
    var Workout = sequelize.define("Workout", {
  
    workoutId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },

    workoutName: {
                type: Sequelize.STRING,
                allowNull: false
            },

    userId: {
            type: Sequelize.INTEGER,
            allowNull: false},

    workoutDate: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW 
            },

    workoutLengthMinutes: {
                type: Sequelize.DATE,
                allowNull: true
            },

    workoutLocation: {
        type: Sequelize.STRING,
        allowNull: true
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

    createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
                },

    updatedAt: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW
                }
    });
  
  
  //associate Workout model to the userWorkout model
    // Workout.associate = function(models) {
    //   models.Workout.hasMany(models.User, {foreignKey: 'userId'});
    // };
  
    return Workout;
  };
  
    