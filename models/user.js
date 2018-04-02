module.exports = function(sequelize, DataTypes){
	
	var User = sequelize.define('User', {

		googleId: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		googleToken: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		stravaId: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		stravaToken: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: null
		},
		//personal info
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {	isEmail: true }
		},
		firstName: {
			type: DataTypes.STRING,
			defaultValue: null
		},
		lastName: {
			type: DataTypes.STRING,
			defaultValue: null
		},
		displayName: {
			type: DataTypes.STRING,
			defaultValue: null
		},
		userType: {
			type: DataTypes.STRING,
			defaultValue: 'athlete' // 'coach', 'admin'
		},
		photo: {
			type: DataTypes.STRING,
			defaultValue: null
		},
		tShirtSize: {
			type: DataTypes.STRING,
			defaultValue: 'L'			
		},
		phone: {
			type: DataTypes.STRING,
			defaultValue: null			
		},
		address1: {
			type: DataTypes.STRING,
			defaultValue: null			
		},
		address2: {
			type: DataTypes.STRING,
			defaultValue: null
		},
		city: {
			type: DataTypes.STRING,
			defaultValue: null			
		},
		state: {
			type: DataTypes.STRING,
			defaultValue: null			
		},
		country: {
			type: DataTypes.STRING,
			defaultValue: 'us'			
		},
		zipcode: {
			type: DataTypes.STRING,
			defaultValue: null
		},
		birthDate: {
			type: DataTypes.STRING,
			defaultValue: null			
		},
		//emergency contact
		emergencyFName: {
			type: DataTypes.STRING,
			defaultValue: null			
		},
		emergencyLName: {
			type: DataTypes.STRING,
			defaultValue: null			
		},
		emergencyPhone: {
			type: DataTypes.STRING,
			defaultValue: null			
		}		
	});

	// User.associate = function(models) {
	// 	User.belongsToMany(models.Program, 
	// 		{ through: 'userPrograms', foreignKey: 'userProgramId' });
	// 	User.belongsToMany(models.Race, 
	// 		{ through: 'userRaces', foreignKey: 'userId' });
	// };

	return User;
}
