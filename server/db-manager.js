// Esta arquivo tem o trabalho de fazer uma interface transparente entre Sequelize e MongoDb

var Config = require('config');
var Models = require('modules/models.js');
var Sequelize = require('sequelize');
var Mongoose = require('mongoose');
var Glob = require('glob');
var Path = require('path');

// Definindo tipo de data como UUID
Sequelize.UUID = Sequelize.CHAR(22).BINARY;

module.exports = (function () {

    
});
