module.exports = function(sequelize, Sequelize) {
    var UserProgram = sequelize.define("UserProgram", {
  
    userProgramId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },

    programId: {
        type: Sequelize.INTEGER,
        allowNull: false
        },

    userId: {
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
  
  
  //associate userProgram model to other models
    UserProgram.associate = function(models) {
      models.UserProgram.hasMany(models.Program, {foreignKey: 'programId'});
    };
  
    return UserProgram;
};
  
    