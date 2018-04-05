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
            type: Sequelize.DATE,
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
            type: Sequelize.DATE,
            allowNull: true
        }
    });
  
  
    Race.associate = function(models) {
        Race.belongsToMany(models.User, { 
            through: { model: 'UserRace', unique: false }, 
            foreignKey: 'raceId',
            constraints: false
        });
        Race.belongsToMany(models.Program, { 
            through: { model: 'ProgramRace', unique: false }, 
            foreignKey: 'raceId',
            constraints: false
        });
    };
  
    return Race;
  };
  
    