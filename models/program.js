module.exports = function(sequelize, Sequelize) {
    var Program = sequelize.define("Program", {
  
      programId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
  
      programName: {
                  type: Sequelize.STRING,
                  allowNull: false
                },
  
      couchId: {
              type: Sequelize.INTEGER,
              allowNull: false},
  
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
  
  
  //associate program model to the userProgram model
    // Program.associate = function(models) {
    //   models.Program.hasMany(models.UserProgram, {foreignKey: 'programId'});
    //   models.Program.hasMany(models.Workout, {foreignKey: 'programId'});
    //   models.Program.hasMany(models.Race, {foreignKey: 'programId'});
    // };
  
    return Program;
  };
  
    