var Glob = require('glob');
var Path = require('path');
var Hapi = require('hapi');
var Config = require('config');
var Promise = require('bluebird');
var Vision = require('vision');
var Inert = require('inert');
var Server = new Hapi.Server();
var Swagger = require('hapi-swagger');

var RoutesLoader = require('./routes');
var Controllers = rootRequire('server/modules/controllers');

module.exports.init = function () {

	return new Promise(function (resolve, reject) {

		exports.deployServer(Server).then(function (server) {
			console.log('Server Deployed...');

			RoutesLoader.routes().forEach(function (route) {
				Server.route(route);
			});
			console.log('Routes loaded...');

			resolve(Server);
			// Controllers.register(Server);
			// console.log('Controllers Registered ...');
		}).catch(function (error) {

			reject(error);
		});
	}).catch(function (error) {

		throw error;
	})
};


exports.deployServer = function (Server){

	// Put Server to start ...
	return new Promise(function (resolve, reject) {

		Server.connection({
				host: Config.servers.rest.connection.host,
				port: Config.servers.rest.connection.port
			});

		Server.register([
			Inert,
			Vision,
			{
				register: Swagger,
				apiVersion: '1.0.0',
				documentationPath: '/explorer'
			}
		], function (err) {

			if(err) {
				throw err;
			}
		});

		resolve(Server);
	})
};
