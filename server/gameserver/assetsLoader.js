var Config = require('config');
var Errors = require('common-errors');

var AssetsObject = {
    Phaser: require('phaser')
}

global.assetRequire = function(name) {

    if(AssetsObject[name]) {

        return AssetsObject[name];
    }

    var err = new Errors.NotFoundError('Asset');
    err.message = "Asset not found.";

    throw err;
};
