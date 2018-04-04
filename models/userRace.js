module.exports = function(sequelize, Sequelize) {
    var UserRace = sequelize.define("UserRace", {
  
        userResult: {
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
  
    return UserRace;
};
  
    