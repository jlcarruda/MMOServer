var Sequelize = require('sequelize');
var Glob = require('glob');
var Config = require('config');
var Path = require('path');

var Controllers = rootRequire('server/modules/controllers');

exports.register = function (server, options, next) {

    server.bind({
        controllers: Controllers
    });

    server.expose('handlers', Controllers);
    // next();
};


module.exports = (function() {

        var files = Glob.sync(__dirname + Path.sep + '**' + Path.sep + 'controller.js');

        var controllers = {};

        files.forEach(function (file) {

            var dirname = Path.dirname(file);
            var baseName = Path.basename(file);
            var controller = require(dirname + Path.sep + 'controller');

            var controllerName = controller.name;

            controllers[controllerName] = controller;
        });

        return controllers;
})();
