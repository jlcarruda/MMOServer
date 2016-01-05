exports.name = 'User';

exports.schema = function(DataTypes) {

	return {
		name: {
			type: DataTypes.STRING
		},
		
		gender: {
			type: DataTypes.STRING
		},

		class: {
			type: DataTypes.STRING
		}
	};
};

exports.associate = function (models) {

};

exports.classMethods = { // http://docs.sequelizejs.com/en/latest/docs/models-definition/#expansion-of-models

};

exports.instanceMethods = { // http://docs.sequelizejs.com/en/latest/docs/models-definition/#expansion-of-models

};

exports.hooks = { // Hooks nos permitem tomar ações dentro do ciclo de vida do model: http://docs.sequelizejs.com/en/latest/docs/hooks/

};
