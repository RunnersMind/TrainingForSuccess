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

    // UserProgram.associate = function(models) {
    //     UserProgram.belongsTo(models.Program, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     UserProgram.belongsTo(models.User, { 
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
  
    return UserProgram;
};
