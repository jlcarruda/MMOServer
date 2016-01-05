var Config = require('config');
var Rest = require('./rest/index.js');
var GameServer = require('./gameserver/index.js');
var cls = require('./lib/class.js');
var Async = require('async');
var Path = require('path');
var Swagger = require('hapi-swagger');
var Colors = require('colors');
var ServerHandler = {};


module.exports.init = function (callback) {
	/*
		-> Carregar Banco de DAdos
		-> Carregar Models
		-> Carregar REST
		-> Carregar GameWorld
        -> Carregar Assets
	*/

    var Models = rootRequire('server/modules/models');
    Models.sync();

	// Load Rest API
    Rest.init().then(function (server) {

        this.server = server;

        // Load Game Server
        return GameServer.start(this.server.listener).catch(function (error) {

            if(error) {

                console.log('Error while starting ' + Colors.magenta('Game Server'));
                throw error;
            }
        });

        console.log("Game Server Started ...");
    }).then(function () {

        // Load Server
        this.server.start((err) => {
            if(err) {

                throw err;
            }

            console.log('Server running at: ', this.server.info.uri.toLowerCase());

        });
    }).catch(function (error) {

        if(error) {
            throw error;
        }
    });
}
