var Config = require('./config/development.json');
var Rest = require('./rest/index.js');
var Hapi = require('hapi');
var GameServer = require('./gameserver/index.js');
var server = new Hapi.Server();
var Vision = require('vision');
var Inert = require('inert');
var cls = require('./lib/class.js');

var Swagger = require('hapi-swagger');
var ServerHandler = {};

global.rootServerRequire = function (name) {

    // https://gist.github.com/branneman/8048520

    return require(__dirname + '/' + name);
};

module.exports.init = function (callback) {

	// Put Rest to start ...
	server.connection({
			host: Config.hapi.connection.host,
			port: Config.hapi.connection.port
		});

	server.register([
		Inert,
		Vision,
		{
			register: Swagger
		}
	], function (err) {
		
			
	});
	
	// One handler to rule them all!
	ServerHandler.server = server;
	ServerHandler.gamerserver = GameServer;
	
	// Start gameserver ...
	GameServer.start(server.listener, function () {
		
		server.start((err) => {
			if(err) {

				callback(err, null);
				throw err;
			}

			callback(null, ServerHandler);
			console.log('Server running at: ', server.info.uri.toLowerCase());

		});
	})
}

exports.attributes = {
	ServerHandler: ServerHandler
};