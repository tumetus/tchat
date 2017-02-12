import {
	CHAT_MESSAGE_CHANGE,
	CHAT_MESSAGE,
  RESET_MESSAGE_BODY
} from '../actions/types';

const INITIAL_STATE = { messageBody: "", messages: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHAT_MESSAGE_CHANGE:
  		return {...state, messageBody: action.payload};
	case CHAT_MESSAGE:
		return {...state, messages: [...state.messages, action.payload]};
  	default:
      return state;
  }
};
