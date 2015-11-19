var Config = require('config');

module.exports.start = function (listener, callback) {

	var io = require('socket.io')(listener);

	io.on("connection", function (socket) {

		console.log('Connected.');

		socket.emit('hey'); // Testing emit to Poker.
		socket.on('listen', function (data) {
			console.log(data.message);
		});

	});
	
	callback();
}