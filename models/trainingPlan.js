module.exports = function(sequelize, Sequelize) {
    var TrainingPlan = sequelize.define("TrainingPlan", {
  
        workoutLocationDescription: {
            type: Sequelize.STRING,
            allowNull: true
        },

        workoutDay: { //day number in the program
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

    TrainingPlan.associate = function(models) {
        TrainingPlan.belongsTo(models.Program, {
            foreignKey: {
                allowNull: false
            }
        });
        TrainingPlan.belongsTo(models.Workout, { 
            foreignKey: {
                allowNull: false
            }
        });
    };

    return TrainingPlan;
}