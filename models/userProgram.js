module.exports = function(sequelize, Sequelize) {
    var UserProgram = sequelize.define("UserProgram", {
        
        approved: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },

        userRole: {
            type: Sequelize.STRING,
            defaultValue: 'athlete'
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
  
    return UserProgram;
};
