exports.name = 'User';

exports.schema = function(DataTypes) {

	return {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
		name: {
			type: DataTypes.STRING
		},
        email: {
            type: DataTypes.STRING
        },
		gender: {
			type: DataTypes.STRING
		},
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        characterCount: {
            type: DataTypes.INTEGER
        }
	};
};

exports.associate = function (models) {
    this.hasMany(models.Character)
};

exports.classMethods = { // http://docs.sequelizejs.com/en/latest/docs/models-definition/#expansion-of-models

};

exports.instanceMethods = { // http://docs.sequelizejs.com/en/latest/docs/models-definition/#expansion-of-models

};

exports.hooks = { // Hooks nos permitem tomar ações dentro do ciclo de vida do model: http://docs.sequelizejs.com/en/latest/docs/hooks/

};
