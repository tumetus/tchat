import io from 'socket.io-client';

class SocketHandler {

	static initialize(params) {
		const { host } = params;
		let socket = io(host, {
	      transports: ['websocket'] // you need to explicitly tell it to use websockets
	    });

	    socket.on('connect', () => {
	      console.log('connect event !!');
	    });
	    socket.on('chat message', (data) => {
	      console.log("new message:", data);
	    });

	    SocketHandler.socket = socket;
	};

	static listen(event, func) {
		if (SocketHandler.socket) {
			SocketHandler.socket.on(event, func);
		} else {
			console.log('SocketHandler.js - Cannot listen for ' + event + '. Socket is undefined.');
		}
	};

};

export default SocketHandler;


