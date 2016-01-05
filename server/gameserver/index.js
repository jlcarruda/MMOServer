
var Promise = require('bluebird');
var Config = require('config');
// var Phaser = require('phaser');

module.exports.start = function (listener) {

	return new Promise(function (resolve, reject) {

		var io = require('socket.io')(listener);

		io.on("connection", function (socket) {

			console.log('Connected.');

			socket.emit('hey'); // Testing emit to Poker.
			socket.on('listen', function (data) {
				console.log(data.message);
			});

		});

		resolve();
	});
}
