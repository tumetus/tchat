import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
//import io from 'socket.io-client';
import reducers from './reducers';
import Router from './Router';

import SocketHandler from './SocketHandler';

class App extends Component {
  componentWillMount() {
    SocketHandler.initialize({
      host: 'https://example.com'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
