exports.name = 'Character';

exports.schema = function(DataTypes) {

	return {
		id: {
			type: DataTypes.UUID,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		},
		gender: {
			type: DataTypes.STRING
		},
		level: {
			type: DataTypes.INTEGER
		},
		exp: {
			type: DataTypes.INTEGER
		},

		// Attributes
		strength: {
			type: DataTypes.INTEGER
		},
		dexterity: {
			type: DataTypes.INTEGER
		},
		constitution: {
			type: DataTypes.INTEGER
		},
		intelligence: {
			type: DataTypes.INTEGER
		},
		charisma: {
			type: DataTypes.INTEGER
		},
		wisdom: {
			type: DataTypes.INTEGER
		},
		luck: {
			type: DataTypes.INTEGER
		},

		// Status
		hitpoints: {
			type: DataTypes.INTEGER
		},
		spellpoints:{
			type: DataTypes.INTEGER,
			allowNull: true
		},
		kipoints: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		armor: {
			type: DataTypes.INTEGER
		},
		initiative: {
			type: DataTypes.INTEGER
		},
		dodge: {
			type: DataTypes.INTEGER
		},
		physicalResistance: {
			type: DataTypes.INTEGER
		},
		magicResistance: {
			type: DataTypes.INTEGER
		},

		// Positioning
		locationId: {
			type: DataTypes.UUID
		},
		xPos: {
			type: DataTypes.INTEGER
		},
		yPos: {
			type: DataTypes.INTEGER
		},
		zPos: {
			type: DataTypes.INTEGER
		}

	};
};

exports.associate = function (models) {
	this.belongsTo(models.User);
};

exports.classMethods = { // http://docs.sequelizejs.com/en/latest/docs/models-definition/#expansion-of-models

};

exports.instanceMethods = { // http://docs.sequelizejs.com/en/latest/docs/models-definition/#expansion-of-models

};

exports.hooks = { // Hooks nos permitem tomar ações dentro do ciclo de vida do model: http://docs.sequelizejs.com/en/latest/docs/hooks/

};
