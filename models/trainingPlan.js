module.exports = function(sequelize, Sequelize) {
    var TrainingPlan = sequelize.define("TrainingPlan", {
  
    workoutId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    programId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    workoutLocationDescription: {
        type: Sequelize.STRING,
        allowNull: true
    },

    workoutDay: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    deleteFlag: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },

    deleteDate: {
        type: Sequelize.DATE,
        allowNull: true
    }
});
}