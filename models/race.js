module.exports = function(sequelize, Sequelize) {
    var Race = sequelize.define("Race", {
  
    raceId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
    },

    raceName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    userId: {
    type: Sequelize.INTEGER,
    allowNull: false},

    raceDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },

    raceDistance: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

    raceLocation: {
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
  
  
  //associate race model to the user model
    // Race.associate = function(models) {
    //   models.Race.hasMany(models.User, {foreignKey: 'raceId'});
    // };
  
    return Race;
  };
  
    