import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Chat from './components/Chat';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="main">
        <Scene
          key="chatView"
          component={Chat}
          title="tchat"
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
