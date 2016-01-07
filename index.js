global.rootRequire = function (name) {

	return require(__dirname + '/' + name);
};

global.rootModulesRequire = function (name) {

	return require(__dirname + '/server/modules/' + name);
}

var App = require('./server/server.js');
var Path = require('path');
var Mongoose = require('mongoose');
var Colors = require('colors');
var Promise = require('bluebird');
var Errors = require('common-errors');

console.log(Colors.cyan('[MONGOOSE] ') + 'Testing Mongoose connection ...');

// Objeto com opções passadas para o servidor na inicialização pelo terminal.
var options = {};

var db = Mongoose.connection;
function testingMongooseConnection() {

	return new Promise(function (resolve, reject) {

		db.on('connected', function () {
			console.log(Colors.cyan('[MONGOOSE] ') + "Mongoose connected!");
			db.close();
			resolve();
		});

		db.on('error', function (error) {
			reject(error)
		});
	}).catch(function (error) {

		throw error;
	});

};

Mongoose.connect('mongodb://localhost/test');

function parseCommandlineOptions() {
	var args = process.argv;
	return new Promise(function (resolve, reject) {

		args.find(function (element, index, array) {

			if(element === '-db') {
				var databaseSelected = array[index+1];
				var databaseSelectedUpper = databaseSelected.toUpperCase()
				if(['MONGO', 'SQLITE', 'MYSQL', 'POSTGRE'].indexOf(databaseSelectedUpper) > -1) {
					options.database = databaseSelected;
				} else {
					var err = new Errors.ArgumentError();
					err.message = 'Database not supported: ' + databaseSelected;
					reject(err);
				}
			}
		});

		resolve();
	}).catch(function (error) {

		throw error;
	});
};

// |||||||||||||||||||||||||||||||||||||||||||||||||||||\
// 				Here the Magic Begins!
// |||||||||||||||||||||||||||||||||||||||||||||||||||||\
parseCommandlineOptions().then(function () {

	return testingMongooseConnection();
}).then(function () {
	App.init(function (err) {
		if(err) {

			throw err;
		}
		console.log('Server Running!!');
	});
}).catch(function (error) {

	throw error;
});
