module.exports = function(sequelize, Sequelize) {
    var Race = sequelize.define("Race", {
  
    stravaRaceId: {
        type: Sequelize.INTEGER,
        allowNull: true
    },    
    
    raceName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    raceDate: {
        type: Sequelize.DATETIME,
        allowNull: false,
    },

    raceDistance: {
        type: Sequelize.INTEGER,
        allowNull: true
    },

    raceUOM: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'KM'
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
        type: Sequelize.DATETIME,
        allowNull: true
    }
});
  
  
//   associate race model to the user model
    Race.associate = function(models) {
      models.Race.hasMany(models.User, {foreignKey: 'Id'});
    };
  
    return Race;
  };
  
    