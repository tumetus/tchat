import {
	CHAT_MESSAGE_CHANGE,
	CHAT_MESSAGE
} from './types';
import SocketHandler from '../SocketHandler';

export const chatMessageChange = (body) => {
	return {
		type: CHAT_MESSAGE_CHANGE,
		payload: body
	};
};

export const sendChatMessage = (body) => {
	return (dispatch) => {
		SocketHandler.socket.emit('chat message', body);
		dispatch({type: CHAT_MESSAGE_CHANGE, payload: ''});
	};
};

export const onChatMessage = (message) => {
	return {
		type: CHAT_MESSAGE,
		payload: message
	};
};