module.exports = function(sequelize, Sequelize) {
    var Program = sequelize.define("Program", {
    
        programName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        
        programDescription: {
            type: Sequelize.STRING,
            allowNull: false
        },

        coachId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
  
        programStartDate: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW 
        },
  
        programEndDate: {
            type: Sequelize.DATE,
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
        }
  
    });
  
    Program.associate = function(models) {
        Program.belongsToMany(models.User, { 
            through: { model: 'UserProgram', unique: false }, 
            foreignKey: 'programId',
            constraints: false 
        });
        Program.belongsToMany(models.Race, { 
            through: { model: 'ProgramRace', unique: false },
            foreignKey: 'programId', 
            constraints: false 
        });      
        // Program.belongsToMany(models.Workout, { 
        //     through: { model: 'TrainingPlan', unique: false },
        //     foreignKey: 'programId',
        //     constraints: false
        // });
    };
  
    return Program;
  };
  
    