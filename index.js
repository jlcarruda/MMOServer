global.rootRequire = function (name) {

	return require(__dirname + '/' + name);
};

global.rootModulesRequire = function (name) {

	return require(__dirname + '/server/modules/' + name);
}

var App = require('./server/server.js');
var Path = require('path');


App.init(function (err) {
	if(err) {

		throw err;
	}
	console.log('Server Running!!');
});

// Initialize REST

// App.ServerHandler.rest.route([ {method: 'GET', path: '/user', config: }]);
