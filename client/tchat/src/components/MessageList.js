import React from 'react';
import { View, Text, ListView } from 'react-native';


class MessageList extends React.Component {
	componentWillMount() {
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ data }) {
		const ds = new ListView.DataSource({
		  rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(data);
	}

	renderRow(data) {
		return (
			<View>
				<Text style={{ flex: 1 }}>{data}</Text>
			</View>
		);
	}

	render() {
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
				ref={ref => this.listView = ref}
				onLayout={event => {
					this.listViewHeight = event.nativeEvent.layout.height
				}}
				onContentSizeChange={() => {
					this.listView.scrollTo({y: this.listView.getMetrics().contentLength - this.listViewHeight})
				}}
			/>
		);
	}
};

export default MessageList;