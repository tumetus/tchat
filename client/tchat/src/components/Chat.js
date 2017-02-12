import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import { CardSection, Card, Button, Input } from './common';
import { chatMessageChange, sendChatMessage, onChatMessage } from '../actions';

import SocketHandler from '../SocketHandler';
import MessageList from './MessageList';

class Chat extends React.Component {

	componentWillMount() {
		SocketHandler.listen('chat message', (data) => {
			this.props.onChatMessage(data);
	    });
	}

	onSend() {
		this.props.sendChatMessage(this.props.messageBody);
	}

	renderMessages() {
		let messages = [];
		this.props.messages.map((msg) => {
			messages.push(<Text key={msg}>{msg}</Text>);
		});
		return messages;
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<CardSection style={{ flex: 1 }}>
					<MessageList data={this.props.messages} />
				</CardSection>
				<CardSection>
				<View style={styles.containerStyle}>
					<TextInput
						style={styles.inputStyle}
						onChangeText={this.props.chatMessageChange}
						value={this.props.messageBody}
						onSubmitEditing={this.onSend.bind(this)}
					/>
				</View>
					{/*<Input 
						onChangeText={this.props.chatMessageChange}
						value={this.props.messageBody}
					/>
					<Button	onPress={this.onSend.bind(this)}>Send</Button>*/}
				</CardSection>
			</View>
		);
	}
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

const mapStateToProps = (state) => {
	const { messageBody, messages } = state.chat;
	return {
		messageBody,
		messages
	};
};

export default connect(mapStateToProps, { chatMessageChange, sendChatMessage, onChatMessage })(Chat);

