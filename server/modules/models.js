var Sequelize = require('sequelize');
var Glob = require('glob');
var Config = require('config');
var Path = require('path');
var Colors = require('colors');

Sequelize.UUID = Sequelize.CHAR(22).BINARY;

module.exports = (function () {

	var dbConfig = Config.get('database_rest');
	var database = new Sequelize(dbConfig.uri, dbConfig.options);

	var files = Glob.sync(__dirname + Path.sep + '**' + Path.sep + 'model.js');
	var models = {};
	var modules = {};

	files.forEach(function (file) {

		var dirName = Path.dirname(file);
        var module = require(dirName + Path.sep + 'model');
        var modelName = module.name;
        modules[modelName] = module;

        var schema = module.schema(Sequelize);
        var hooks = (module.hooks) ? module.hooks : {};

        var model = database.define(modelName, schema, {
        	freezeTableName: true,
            classMethods: (module.classMethods) ? module.classMethods : {},
            instanceMethods: (module.instanceMethods) ? module.instanceMethods : {},
            hooks: hooks
        });

		var message = Colors.cyan('[MODELS] ') + Colors.red(modelName) + ' defined';
		console.log(message);
        models[modelName] = model;

	})

	models.sync = function () {

		return database.sync();
	}

	return models;
})();
